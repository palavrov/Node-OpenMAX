//This file is auto-generated from 'node headerGeneration/generateComponents.js' 

import util = require('util')
import omx = require('../../')

export class WriteMedia extends omx.Component {
  constructor() {
    super('write_media');
    var self = this;
    this.init(omx.ILCLIENT_CREATE_FLAGS.ILCLIENT_DISABLE_ALL_PORTS | omx.ILCLIENT_CREATE_FLAGS.ILCLIENT_ENABLE_INPUT_BUFFERS);
    this.component.setPorts(170, 0);
  }
  
  
}