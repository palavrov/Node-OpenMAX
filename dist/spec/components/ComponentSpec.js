"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var omx = require("../../index");
describe("Component", function () {
    it("should create component", function () {
        new omx.VideoDecode();
    });
    it("should fully init", function (done) {
        var vd = new omx.VideoDecode();
        vd.init().then(function () {
            done();
        });
    });
    it("should load and be in idle state", function (done) {
        var vd = new omx.VideoDecode();
        vd.init()
            .then(function () {
            expect(vd.getState()).toEqual(omx.STATETYPE.StateIdle);
            done();
        })
            .catch(console.log.bind(console));
    });
    it("should change to executing state", function (done) {
        var vd = new omx.VideoDecode();
        vd.init()
            .then(function () {
            return vd.changeState(omx.STATETYPE.StateExecuting);
        })
            .then(function () {
            expect(vd.getState()).toEqual(omx.STATETYPE.StateExecuting);
            done();
        })
            .catch(console.log.bind(console));
    });
    it("should return on same state change", function (done) {
        var vd = new omx.VideoDecode();
        vd.init()
            .then(function () {
            return vd.changeState(omx.STATETYPE.StateIdle);
        })
            .then(function () {
            return vd.changeState(omx.STATETYPE.StateIdle);
        })
            .then(null, function () {
            done();
        })
            .catch(console.log.bind(console));
    });
    it("should return on wrong state change", function (done) {
        var vd = new omx.VideoDecode();
        vd.init()
            .then(function () {
            return vd.changeState(omx.STATETYPE.StateLoaded);
        })
            .then(function () {
            return vd.changeState(omx.STATETYPE.StateExecuting);
        })
            .catch(function () {
            done();
        });
    });
    it("should call close n times", function (done) {
        var total = 5;
        var vd = new omx.VideoDecode();
        vd.init()
            .then(function () {
            var called = 0;
            var promises = [];
            for (var i = 0; i < total; i++) {
                promises.push(vd.close()
                    .then(function () {
                    expect(vd.closed).toEqual(true);
                    called++;
                }));
            }
            Promise.all(promises).then(function () {
                expect(called).toEqual(total);
                done();
            });
        });
    });
});
