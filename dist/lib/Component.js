"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omx = require("../index");
var stream = require("stream");
var events = require("events");
var utils = require("./utils");
var Promise = require("promise");
var Node_OMX = require('bindings')('Node_OMX');
var VERBOSE_LEVEL;
(function (VERBOSE_LEVEL) {
    VERBOSE_LEVEL[VERBOSE_LEVEL["None"] = 0] = "None";
    VERBOSE_LEVEL[VERBOSE_LEVEL["Info"] = 1] = "Info";
    VERBOSE_LEVEL[VERBOSE_LEVEL["Debug"] = 2] = "Debug";
    VERBOSE_LEVEL[VERBOSE_LEVEL["Stack"] = 3] = "Stack";
})(VERBOSE_LEVEL = exports.VERBOSE_LEVEL || (exports.VERBOSE_LEVEL = {}));
var EventHandlers = (function () {
    function EventHandlers(eEvent, nData1, nData2, fulfill, reject, stack) {
        this.eEvent = eEvent;
        this.nData1 = nData1;
        this.nData2 = nData2;
        this.fulfill = fulfill;
        this.reject = reject;
        this.stack = stack;
    }
    return EventHandlers;
}());
exports.EventHandlers = EventHandlers;
var Component = (function (_super) {
    __extends(Component, _super);
    function Component(name, cname) {
        var _this = _super.call(this, {
            readableObjectMode: name === 'egl_render'
        }) || this;
        _this.name = name;
        _this.cname = cname;
        _this.component = null;
        _this.firstReadPacket = true;
        _this.firstWritePacket = true;
        _this.hasPortSettingsChanged = false;
        _this.first_packet = true;
        _this.useOpenGL = false;
        _this.graphics = null;
        _this.autoClose = true;
        _this.closingPromise = null;
        _this.closed = false;
        _this.registeredEventHandlers = [];
        _this.useOpenGL = name === 'egl_render';
        if (_this.cname === undefined)
            _this.cname = _this.name;
        return _this;
    }
    Component.prototype.log = function (level, args) {
        if (level <= Component.verbose) {
            if (Component.logComponent === null || Component.logComponent === this.cname) {
                Array.prototype.unshift.call(args, this.cname);
                Array.prototype.unshift.call(args, '  '.repeat(level - 1));
                console.log.apply(console, args);
            }
        }
    };
    Component.prototype.info = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        this.log(VERBOSE_LEVEL.Info, arguments);
    };
    Component.prototype.debug = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        this.log(VERBOSE_LEVEL.Debug, arguments);
    };
    Component.prototype.init = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            _this.initHost();
            _this.component = Node_OMX.COMPONENTTYPE(_this.name, _this.componentEventHandler.bind(_this), _this.bufferDone.bind(_this));
            _this.registerComponentPipe();
            _this.registerOnFinish();
            fulfill();
        })
            .then(function () {
            return _this.disableAllPorts();
        })
            .then(function () {
            return _this.changeState(omx.STATETYPE.StateIdle);
        });
    };
    Component.initAll = function (components) {
        return Promise.all(components.map(function (component) {
            return component.init();
        }));
    };
    Component.prototype.initHost = function () {
        if (!Component.isOMXInit) {
            Node_OMX.bcm_host_init();
            Node_OMX.OMX_Init();
            Component.isOMXInit = true;
            process.on('exit', this.exitHandler.bind(null, true, false, 'exit'));
            process.on('SIGINT', this.exitHandler.bind(null, false, true, 'SIGINT'));
            process.on('uncaughtException', this.exitHandler.bind(null, false, true, 'uncaughtException'));
        }
    };
    Component.prototype.exitHandler = function (cleanup, exit, type_str, err) {
        if (cleanup) {
            console.log('Quit on', type_str, err);
            Node_OMX.OMX_Deinit();
            Node_OMX.bcm_host_deinit();
        }
        if (exit) {
            process.exit();
        }
    };
    Component.prototype.componentEventHandler = function (eEvent, nData1, nData2) {
        for (var i = this.registeredEventHandlers.length - 1; i >= 0; i--) {
            var x = this.registeredEventHandlers[i];
            var isRightEvent = x.eEvent == eEvent && x.nData1 == nData1 && x.nData2 == nData2;
            var isError = eEvent == omx.EVENTTYPE.EventError;
            if (isRightEvent || isError) {
                if (isRightEvent) {
                    x.fulfill(this);
                }
                if (isError) {
                    if (x.stack) {
                        console.error(x.stack);
                    }
                    x.reject(nData1);
                }
                this.registeredEventHandlers.splice(i, 1);
            }
        }
        switch (eEvent) {
            case omx.EVENTTYPE.EventPortSettingsChanged:
                this.component.emit('eventPortSettingsChanged');
                break;
        }
    };
    Component.prototype.bufferDone = function (direction, pBuffer) {
        var _this = this;
        if (direction == 0) {
            this.debug('buffer_done', direction === 0 ? 'empty' : 'fill');
            this.emptyBufferDone();
        }
        else {
            this.out_list.forEach(function (item, i) {
                if (item !== undefined) {
                    if (pBuffer === item.header) {
                        _this.debug('buffer_done', direction === 0 ? 'empty' : 'fill', item.id);
                        _this.readDone(item);
                        return;
                    }
                }
            });
        }
    };
    Component.prototype.registerComponentPipe = function () {
        var _this = this;
        this.on('pipe', function (source) {
            source.on('portDefinitionChanged', function (portDefinition) {
                var sinkPortDefinition = _this.getParameter(_this.in_port, omx.INDEXTYPE.IndexParamPortDefinition);
                if (sinkPortDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainVideo && portDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainVideo) {
                    sinkPortDefinition.video = portDefinition.video;
                }
                if (sinkPortDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainImage && portDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainImage) {
                    sinkPortDefinition.image = portDefinition.image;
                }
                if (sinkPortDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainImage && portDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainVideo) {
                    sinkPortDefinition.image = portDefinition.video;
                }
                if (sinkPortDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainVideo && portDefinition.eDomain === omx.PORTDOMAINTYPE.PortDomainImage) {
                    sinkPortDefinition.video = portDefinition.image;
                }
                sinkPortDefinition.nBufferSize = portDefinition.nBufferSize;
                _this.setParameter(_this.in_port, omx.INDEXTYPE.IndexParamPortDefinition, sinkPortDefinition);
            });
        });
    };
    Component.prototype.registerOnFinish = function () {
        var _this = this;
        this.on('finish', function () {
            _this.info('on finish');
            var inputBuffer = _this.getInputBuffer();
            if (inputBuffer !== undefined) {
                inputBuffer.header.nFilledLen = 0;
                inputBuffer.header.nFlags = 0x00000001 | 0x00000100;
                _this.emptyBuffer(inputBuffer.header)
                    .then(function () {
                    if (_this.out_port === 0) {
                        if (_this.autoClose) {
                            _this.close();
                        }
                    }
                })
                    .catch(console.log.bind(console, "ERROR:registerOnFinish:"));
            }
            setTimeout(function () { }, 1000);
        });
    };
    Component.copyAsync = function (chunk, buf, destnStride, destnSliceHeight, offsetX, offsetY, nStride, width, nSliceHeight, height, callback) {
        return Node_OMX.copyAsync(chunk, buf, destnStride, destnSliceHeight, offsetX, offsetY, nStride, width, nSliceHeight, height, callback);
    };
    Component.prototype.close = function () {
        var _this = this;
        if (this.closingPromise) {
            return this.closingPromise;
        }
        this.info('close');
        this.closingPromise = this.flush()
            .then(function () {
            _this.debug('flush done');
            return _this.disablePortBuffers([_this.in_port, _this.out_port]);
        })
            .then(function () {
            _this.debug('disablePortBuffers done');
            _this.tunnelTo(_this.in_port);
            _this.tunnelTo(_this.out_port);
            return Promise.resolve();
        })
            .then(function () {
            _this.debug('teardown tunnel done');
            if (_this.getState() !== omx.STATETYPE.StateIdle && _this.getState() !== omx.STATETYPE.StateLoaded) {
                return _this.changeState(omx.STATETYPE.StateIdle);
            }
            else {
                return Promise.resolve();
            }
        })
            .then(function () {
            _this.debug('changeState StateIdle done', _this.getState());
            return new Promise(function (fulfill, reject) {
                return _this.changeState(omx.STATETYPE.StateLoaded).then(fulfill, fulfill);
            });
        })
            .then(function () {
            _this.debug('changeState StateLoaded done');
            _this.component.close();
        })
            .then(function () {
            _this.push(null);
            _this.closed = true;
        })
            .catch(console.log.bind(console, "ERROR:Close:"));
        return this.closingPromise;
    };
    Component.prototype.registerEventHandler = function (eEvent, nData1, nData2) {
        var _this = this;
        var stack;
        if (Component.verbose >= VERBOSE_LEVEL.Stack) {
            var err = new Error;
            stack = err.stack;
        }
        return new Promise(function (fulfill, reject) {
            _this.registeredEventHandlers.push(new EventHandlers(eEvent, nData1, nData2, fulfill, reject, stack));
        });
    };
    Component.prototype.setPorts = function (in_port, out_port) {
        this.in_port = in_port;
        this.out_port = out_port;
    };
    Component.prototype.changeState = function (state) {
        this.debug("Change state from", this.getState(), 'to', state);
        this.sendCommand(omx.COMMANDTYPE.CommandStateSet, state);
        return this.registerEventHandler(omx.EVENTTYPE.EventCmdComplete, omx.COMMANDTYPE.CommandStateSet, state);
    };
    Component.prototype.getState = function () {
        return this.component.getState();
    };
    Component.prototype.tunnelTo = function (out_port, sink, in_port) {
        if (!out_port)
            return;
        if (sink) {
            this.info('tunnel from', this.cname, out_port, 'to', sink.cname, in_port);
            return this.component.tunnelTo(out_port, sink.component, in_port);
        }
        else {
            this.info('destroy tunnel from', this.cname, out_port);
            return this.component.tunnelTo(out_port, undefined, 0);
        }
    };
    Component.prototype.getParameter = function (port, index) {
        return this.component.getParameter(port, index);
    };
    Component.prototype.setParameter = function (port, index, format) {
        return this.component.setParameter(port, index, format);
    };
    Component.prototype.sendCommand = function (commandType, port) {
        this.debug('sendCommand', commandType, port);
        return this.component.sendCommand(commandType, port);
    };
    Component.prototype.disableAllPorts = function () {
        var types = [
            omx.INDEXTYPE.IndexParamAudioInit,
            omx.INDEXTYPE.IndexParamVideoInit,
            omx.INDEXTYPE.IndexParamImageInit,
            omx.INDEXTYPE.IndexParamOtherInit
        ];
        var portsArr = [];
        for (var i = 0; i < types.length; i++) {
            var ports = this.getParameter(0, types[i]);
            if (ports.nPorts === 0)
                continue;
            for (var j = 0; j < ports.nPorts; j++) {
                portsArr.push(this.disablePort(ports.nStartPortNumber + j));
            }
        }
        return Promise.all(portsArr);
    };
    Component.prototype.flush = function (ports) {
        var _this = this;
        this.debug('flush');
        if (!ports)
            ports = [this.in_port, this.out_port];
        var promises = ports.map(function (port) {
            if (port) {
                var portdef = _this.getParameter(port, omx.INDEXTYPE.IndexParamPortDefinition);
                if (portdef.bEnabled == 0 || portdef.nBufferCountActual == 0 || portdef.nBufferSize == 0) {
                    return Promise.resolve();
                }
                _this.sendCommand(omx.COMMANDTYPE.CommandFlush, port);
                return _this.registerEventHandler(omx.EVENTTYPE.EventCmdComplete, omx.COMMANDTYPE.CommandFlush, port);
            }
        });
        return Promise.all(promises);
    };
    Component.prototype.disablePort = function (port) {
        this.debug('disablePort', port);
        this.sendCommand(omx.COMMANDTYPE.CommandPortDisable, port);
        return this.registerEventHandler(omx.EVENTTYPE.EventCmdComplete, omx.COMMANDTYPE.CommandPortDisable, port);
    };
    Component.prototype.disablePortBuffers = function (ports) {
        var _this = this;
        this.debug('disablePortBuffers', ports);
        var promises = ports.map(function (port) {
            if (port) {
                var portdef = _this.getParameter(port, omx.INDEXTYPE.IndexParamPortDefinition);
                if (portdef.bEnabled == 0 || portdef.nBufferCountActual == 0 || portdef.nBufferSize == 0) {
                    return Promise.resolve();
                }
                _this.sendCommand(omx.COMMANDTYPE.CommandPortDisable, port);
                var list;
                list = portdef.eDir == omx.DIRTYPE.DirInput ? _this.in_list : _this.out_list;
                if (list !== undefined) {
                    list.forEach(function (item, i) {
                        _this.component.freeBuffer(port, item.header);
                    });
                }
                return _this.registerEventHandler(omx.EVENTTYPE.EventCmdComplete, omx.COMMANDTYPE.CommandPortDisable, port);
            }
        });
        return Promise.all(promises);
    };
    Component.prototype.enablePort = function (port, createBuffer, useOpenGL) {
        if (createBuffer) {
            var portdef = this.getParameter(port, omx.INDEXTYPE.IndexParamPortDefinition);
            if (portdef.bEnabled != 0 || portdef.nBufferCountActual == 0 || (portdef.nBufferSize == 0 && !useOpenGL)) {
                throw "Cannot enable buffer, wrong buffer";
            }
            var state = this.getState();
            if (!(state == omx.STATETYPE.StateIdle || state == omx.STATETYPE.StateExecuting || state == omx.STATETYPE.StatePause)) {
                throw "Cannot enable buffer, wrong state";
            }
        }
        this.sendCommand(omx.COMMANDTYPE.CommandPortEnable, port);
        if (createBuffer) {
            var bufferList = [];
            for (var i = 0; i != portdef.nBufferCountActual; i++) {
                var buf, outputBuffer;
                if (useOpenGL) {
                    var texture = new omx.GfxTexture(portdef.video.nFrameWidth, portdef.video.nFrameHeight);
                    buf = new omx.EglImage(this.graphics.graphics, texture.texture);
                    outputBuffer = this.component.useEGLImage(port, buf.eglImage);
                    this.debug('useEGLImage', this.name, port, buf.eglImage);
                }
                else {
                    buf = new Buffer(portdef.nBufferSize);
                    outputBuffer = this.component.useBuffer(port, buf);
                    this.debug('useBuffer', this.name, port, buf);
                }
                bufferList.push({
                    buf: buf,
                    header: outputBuffer,
                    id: Component._id++
                });
            }
            if (portdef.eDir == omx.DIRTYPE.DirInput) {
                this.in_list = bufferList;
            }
            else {
                this.out_list = bufferList;
            }
        }
        return this.registerEventHandler(omx.EVENTTYPE.EventCmdComplete, omx.COMMANDTYPE.CommandPortEnable, port);
    };
    Component.prototype.enableInputPortBuffer = function () {
        this.debug('enableInputPortBuffer', this.in_port);
        return this.enablePort(this.in_port, true, false);
    };
    Component.prototype.enableOutputPortBuffer = function () {
        this.debug('enableOutputPortBuffer', this.out_port, this.useOpenGL);
        return this.enablePort(this.out_port, true, this.useOpenGL);
    };
    Component.prototype.enableInputPort = function () {
        this.debug('enableInputPort', this.in_port);
        return this.enablePort(this.in_port, false, false);
    };
    Component.prototype.enableOutputPort = function () {
        this.debug('enableOutputPort', this.out_port);
        return this.enablePort(this.out_port, false, false);
    };
    Component.prototype.getInputBuffer = function () {
        if (this.in_list !== undefined) {
            var buf = this.in_list.shift();
            this.in_list.push(buf);
            return buf;
        }
    };
    Component.prototype.emptyBuffer = function (header) {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            _this.emptyBufferDone = fulfill;
            _this.component.emptyBufferAsync(header, function () {
            });
        });
    };
    Component.prototype.fillBuffer = function (header) {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            _this.component.fillBufferAsync(header, function () {
                fulfill();
            });
        });
    };
    Component.prototype.doTunnel = function (nextComponent) {
        var _this = this;
        this.info('tunnel eventPortSettingsChanged');
        if (this.getState() === omx.STATETYPE.StateLoaded) {
            this.debug('tunnel changeState StateIdle');
            this.changeState(omx.STATETYPE.StateIdle);
        }
        this.tunnelTo(this.out_port, nextComponent, nextComponent.in_port);
        var sourcePortPromise = this.enableOutputPort();
        var sinkPortPromise = nextComponent.enableInputPort();
        if (nextComponent.getState() === omx.STATETYPE.StateLoaded) {
            this.info('Error: nextComponent StateLoaded');
        }
        sinkPortPromise
            .then(function () {
            return sourcePortPromise;
        })
            .then(function () {
            _this.debug('tunnel changeState StateExecuting', nextComponent.cname);
            nextComponent.changeState(omx.STATETYPE.StateExecuting);
            _this.changeState(omx.STATETYPE.StateExecuting);
        })
            .catch(console.log.bind(console, "ERROR:doTunnel:"));
    };
    Component.prototype.tunnel = function (nextComponent) {
        var _this = this;
        if (this.name === "video_decode") {
            this.component.on("eventPortSettingsChanged", function () {
                _this.doTunnel(nextComponent);
            });
        }
        else {
            this.doTunnel(nextComponent);
        }
        this.on('finish', function () {
            _this.info("Tunnel on finish");
            _this.close();
        });
        return nextComponent;
    };
    Component.prototype.initRead = function () {
        var _this = this;
        if (this.firstReadPacket) {
            this.debug('initRead firstReadPacket');
            this.firstReadPacket = false;
            return this.enableOutputPortBuffer()
                .then(function () {
                if (_this.getState() !== omx.STATETYPE.StateExecuting) {
                    _this.debug('initRead changeState StateExecuting');
                    return _this.changeState(omx.STATETYPE.StateExecuting);
                }
            })
                .catch(console.log.bind(console, "ERROR:initRead:"));
        }
        else {
            return Promise.resolve();
        }
    };
    Component.prototype.readDone = function (outputBuffer) {
        var _this = this;
        var buffer = outputBuffer.buf;
        if (outputBuffer.header.nFlags & 0x00000001) {
            this.info("Received BUFFERFLAG_EOS");
            if (this.autoClose) {
                this.close();
            }
            return;
        }
        else {
            buffer.onBufferDone = function () {
                _this.fillBuffer(outputBuffer.header);
            };
            buffer.usedLength = outputBuffer.header.nFilledLen;
        }
        this.push(buffer);
    };
    Component.prototype.readyToRead = function () {
        var _this = this;
        this.info('_read eventPortSettingsChanged');
        this.hasPortSettingsChanged = true;
        var portDefinition = this.component.getParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
        this.debug('_read portDefinition', portDefinition);
        this.emit('portDefinitionChanged', portDefinition);
        this.initRead()
            .then(function () {
            _this.debug('initRead done');
            for (var i = 0; i < _this.out_list.length; i++) {
                _this.fillBuffer(_this.out_list[i].header);
            }
        })
            .catch(console.log.bind(console, "ERROR:readyToRead:"));
    };
    Component.prototype._read = function () {
        this.debug('_read');
        if (!this.hasPortSettingsChanged) {
            if (this.name === "video_decode") {
                this.component.on("eventPortSettingsChanged", this.readyToRead.bind(this));
            }
            else {
                this.readyToRead();
            }
        }
    };
    Component.prototype.writeRecursive = function (chunk, offset) {
        "use strict";
        var _this = this;
        this.debug('writeRecursive', chunk.length, offset);
        var inputBuffer = this.getInputBuffer();
        var inputBufferLength = inputBuffer.header.nAllocLen;
        var lastPacket = chunk.length <= offset + inputBufferLength;
        var slice = chunk.slice(offset, offset + inputBufferLength);
        slice.copy(inputBuffer.buf, 0, 0, inputBufferLength);
        inputBuffer.header.nFilledLen = chunk.length;
        if (this.first_packet) {
            inputBuffer.header.nFlags = 0x00000002;
            this.first_packet = false;
        }
        else {
            inputBuffer.header.nFlags = 0x00000100;
        }
        if (this.name === "image_decode" && lastPacket) {
            inputBuffer.header.nFlags |= 0x00000001;
        }
        this.debug('emptyBuffer');
        return this.emptyBuffer(inputBuffer.header)
            .then(function () {
            _this.debug('emptyBuffer then');
            if (!lastPacket) {
                _this.info('Buffer too small');
                return _this.writeRecursive(chunk, offset + inputBufferLength);
            }
            else {
                if (chunk.onBufferDone) {
                    chunk.onBufferDone();
                }
                return Promise.resolve();
            }
        })
            .catch(console.log.bind(console, "ERROR:writeRecursive:"));
    };
    Component.prototype.initWrite = function () {
        var _this = this;
        if (this.firstWritePacket) {
            this.firstWritePacket = false;
            return this.enableInputPortBuffer()
                .then(function () {
                if (_this.getState() !== omx.STATETYPE.StateExecuting) {
                    return _this.changeState(omx.STATETYPE.StateExecuting);
                }
                else {
                    return Promise.resolve();
                }
            })
                .then(function () {
                if (_this.name === "video_render") {
                    var inputBuffer = _this.getInputBuffer();
                    inputBuffer.header.nFilledLen = 0;
                    _this.emptyBuffer(inputBuffer.header);
                }
                return Promise.resolve();
            })
                .catch(console.log.bind(console, "ERROR:initWrite:"));
        }
        else {
            return Promise.resolve();
        }
    };
    Component.prototype._write = function (chunk, enc, next) {
        var _this = this;
        this.debug('_write', chunk.length);
        this.initWrite()
            .then(function () {
            return _this.writeRecursive(chunk, 0);
        })
            .then(next)
            .catch(console.log.bind(console, "ERROR:_write:"));
    };
    Component.isOMXInit = false;
    Component.verbose = VERBOSE_LEVEL.None;
    Component.logComponent = null;
    Component._id = 0;
    return Component;
}(stream.Duplex));
exports.Component = Component;
utils.inherits(Node_OMX.COMPONENTTYPE, events.EventEmitter);
