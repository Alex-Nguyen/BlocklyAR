var HtmlGenerator = new Blockly.Generator("HTML");
HtmlGenerator.init = function (workspace) {}
HtmlGenerator.finish = function (code) {
    return code;
};

HtmlGenerator.scrub_ = function (block, code) {
    let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = HtmlGenerator.blockToCode(nextBlock);
    return code + nextCode;
};


HtmlGenerator['ar_scene'] = function (block) {
      let statement_content = HtmlGenerator.statementToCode(block,"content");
      return `\n${statement_content}\n`;
};

HtmlGenerator['marker'] = function (block) {
    let value_name = HtmlGenerator.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    let id = block.getFieldValue("id");
    let statement_content = HtmlGenerator.statementToCode(block, "content");
    return `<a-marker project='visAR' id='${id}' ${value_name}>\n${statement_content}\n</a-marker>\n`;
};

HtmlGenerator['ar_preset'] = function (block) {
    let value = block.getFieldValue("preset");
    let code = ` preset = '${value}'`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['src_gltf'] = function (block) {
    let value = block.getFieldValue("src");
    let code = ` src = '${value}'`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

HtmlGenerator['ar_pattern'] = function (block) {
    let value = block.getFieldValue("pattern");
    let code = `type='pattern' url='${value}'`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

HtmlGenerator['cube'] = function (block) {
    let pos = HtmlGenerator.valueToCode(block,'position_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let rot = HtmlGenerator.valueToCode(block,'rotation_vector3', Blockly.JavaScript.ORDER_ATOMIC);

    if(pos !=="") pos  = `position = '${pos}'`;
    if(rot !=="") rot  = `rotation = '${rot}'`;

    return `<a-box project='visAR' ${pos} ${rot}></a-box>`;
};
HtmlGenerator['animation-mixer'] = function (block) {
    let pos = HtmlGenerator.valueToCode(block,'position_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let rot = HtmlGenerator.valueToCode(block,'rotation_vector3', Blockly.JavaScript.ORDER_ATOMIC);

    if(pos !=="") pos  = `position = '${pos}'`;
    if(rot !=="") rot  = `rotation = '${rot}'`;

    return `<a-box project='visAR' ${pos} ${rot}></a-box>`;
};

HtmlGenerator['gltf'] = function (block) {
    let pos = HtmlGenerator.valueToCode(block,'position_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let rot = HtmlGenerator.valueToCode(block,'rotation_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let src = HtmlGenerator.valueToCode(block, "SOURCE", Blockly.JavaScript.ORDER_ATOMIC);
    let ani = HtmlGenerator.valueToCode(block, "animation-mixer", Blockly.JavaScript.ORDER_ATOMIC);
    if(ani !=="") ani = `${ani}`;
    if(pos !=="") pos  = `position = '${pos}'`;
    if(rot !=="") rot  = `rotation = '${rot}'`;

    return `<a-gltf-model project='visAR' ${pos} ${rot}${src}${ani}></a-gltf-model>`;
}
HtmlGenerator['vector3'] = function (block) {
    let x = block.getFieldValue('x');
    let y = block.getFieldValue('y');
    let z = block.getFieldValue('z');
    return [`${x} ${y} ${z}`, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['loop'] = function (block) {
    let lval = block.getFieldValue('loops');
    return `loop: ${lval}`;
}
HtmlGenerator['animation-mixer'] = function (block) {
   let statement_content = HtmlGenerator.statementToCode(block, "NAME");
   let code = ` animation-mixer='${statement_content}'`;
   return [code, Blockly.JavaScript.ORDER_ATOMIC]
}
HtmlGenerator['clip'] = function (block) {
    let lval = block.getFieldValue('clips');
   return `clip: ${lval};`;
}