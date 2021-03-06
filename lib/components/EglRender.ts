// This file is auto-generated from 'node generateComponents.js' 

import omx = require('../../index')

export class EglRender extends omx.Component {
  constructor(name?: string) {
    super('egl_render', name);
    this.setPorts(220, 221);
  }

  // ---- Text can be edited below this line --------
  setBufferCount(countIN: number, countOUT: number) {
    var portdef: omx.PARAM_PORTDEFINITIONTYPE = this.getParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition);
    portdef.nBufferCountActual = Math.max(countIN, portdef.nBufferCountMin);
    this.setParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);

    portdef = this.getParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
    portdef.nBufferCountActual = Math.max(countOUT, portdef.nBufferCountMin);
    this.setParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);
    return this;
  };
  // ---- Text can be edited above this line --------
}