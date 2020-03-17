Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
        "type": "ar_scene",
        "message0": "AR SCENE %1 %2",
        "args0": [
            {
                type: "input_dummy"
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        previousStatement: "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "marker",
        "message0": "marker %1 %2 %3",
        "args0": [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_value",
                name: "NAME",
                check: "attribute"
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type: "ar_preset",
        message0: "Preset %1",
        args0: [
            {
                type: "field_dropdown",
                name: "preset",
                options: [
                    ["hiro", 'hiro'],
                    ["kanji", 'kanji'],
                ]
            }
        ],
        output: "attribute"
    },
    {
        type: "src_gltf",
        message0: "Model %1",
        args0: [
            {
                type: "field_dropdown",
                name: "src",
                options: [
                    ["CesiumMan", 'assets/models/CesiumMan.gltf'],
                    ["kanji", 'kanji'],
                ]
            }
        ],
        output: "attribute"
    },
    {
        type: "ar_pattern",
        message0: "Pattern %1",
        args0: [
            {
                type: "field_dropdown",
                name: "pattern",
                options: [
                    [{src: "assets/markers/letterA.png", width: 25, height: 25}, 'assets/patterns/letterA.patt'],
                    [{src: "assets/markers/letterB.png", width: 25, height: 25}, 'assets/patterns/letterB.patt'],
                    [{src: "assets/markers/letterC.png", width: 25, height: 25}, 'assets/patterns/letterC.patt'],

                ]
            }
        ],
        output: "attribute"
    },
    {
        type: "vector3",
        message0: "x: %1 y: %2 z: %3",
        args0: [
            {
                type: "field_number",
                name: "x",
                value: 0
            },
            {
                type: "field_number",
                name: "y",
                value: 0
            },
            {
                type: "field_number",
                name: "z",
                value: 0
            }
        ],
        output: null
    },
    {
        type: "cube",
        message0: "Cube position %1 rotation %2",
        args0: [
            {
                type: "input_value",
                name: "position_vector3",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "rotation_vector3",
                align: "RIGHT"
            }
        ],
        previousStatement: null,
        nextStatement: "null",
        colour: 65
    },
    {
        type: "gltf",
        message0: "GLTF id %1 position %2 rotation %3 source %4 animation %5",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_value",
                name: "position_vector3",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "rotation_vector3",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "SOURCE",
                check: "attribute",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "animation-mixer",
                check: "attribute",
                align: "RIGHT"
            },
        ],
        previousStatement: null,
        nextStatement: "null",
        colour: 65
    },
    {
        type: "animation-mixer",
        message0: "Animation %1 %2",
        args0: [
            {
                type: "input_dummy"
            }, {
                type: "input_statement",
                name: "NAME"
            }
        ],
        output: "attribute",
        colour: 90
    },
    {
        type: "clip",
        message0: "Clip %1",
        args0: [
            {
                type: "field_dropdown",
                name: "clips",
                options: [
                    ["animation_0", 'animation_0'],
                    ["animation_1", 'animation_1'],
                ]
            }
        ],
        previousStatement: "null",
        nextStatement: "null"
    },
    {
        type: "loop",
        message0: "Loop %1",
        args0: [
            {
                type: "field_dropdown",
                name: "loops",
                options: [
                    ["Once", 'once'],
                    ["repeat", 'repeat'],
                    ["pingpong", 'pingpong']
                ]
            }
        ],
        previousStatement: "null",
        nextStatement: "null"
    },
    {
        "type": "nav_bar",
        "message0": "Navigation %1 %2",
        "args0": [
            {
                type: "input_dummy"
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        "colour": 355,
        nextStatement: "null",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "register_component",
        "message0": "Component %1 %2",
        "args0": [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        previousStatement: "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "script",
        "message0": "Script %1 %2",
        "args0": [
            {
                type: "input_dummy"
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        previousStatement: "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"component_init",
        message0:"Init %1",
        args0:[
            {
                type:"input_statement",
                name:"content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null"
    },
    {
        type:"component_init_function",
        message0:"Set Button %1 on click to Behavior %2",
        args0:[
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type:"input_value",
                name:"content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null"
    },
    {
        type:"component_tick",
        message0:"Ticks %1",
        args0:[
            {
                type:"input_statement",
                name:"content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null"
    },
    {
        type:"button",
        message0:"Button ID %1 NAME %2",
        args0:[
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type:"field_input",
                name:"NAME",
                text: "Button 1",
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type: "behavior",
        message0: "Behavior %1 %2",
        args0: [
            {
                type: "input_dummy"
            }, {
                type: "input_statement",
                name: "NAME"
            }
        ],
        output: "null",
        colour: 90
    },
    {
        type: "print",
        message0: "Alert %1 %2",
        args0: [
            {
                type: "input_dummy"
            },
            {
                type:"field_input",
                name:"NAME",
                text: "Hello world",
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "move_object",
        message0: "Move Object %1 from %2 to %3",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "START",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "END",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "set_object_animation",
        message0: "Set animation of %1 to %2",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "ANIMATION",    // Static name of the field
                "variable": "item"    // Given at runtime
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "move_object_finish",
        message0: "When Object %1 finish moving do %2",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "input_statement",
                "name": "content",    // Static name of the field
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },

    {
        type: "trigger_behavior",
        message0: "Trigger next behavior %1",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "play_audio",
        message0: "Play Audio %1",
        args0: [
            {
                type: "field_dropdown",
                name: "audio",
                options: [
                    ["audio1", 'assets/audio/message01.mp3'],
                    ["audio2", 'assets/audio/message02.mp3'],
                ]
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "wait_second",
        message0: "Wait %1 seconds THEN %2",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_number",
                "name": "NAME",    // Static name of the field
            },
            {    // Beginning of the field variable dropdown
                "type": "input_statement",
                "name": "content",    // Static name of the field
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
]);
