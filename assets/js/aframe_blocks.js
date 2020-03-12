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
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "marker",
        "message0": "marker %1 %2 %3",
        "args0": [
            {
                type: "field_input",
                name: "id",
                text: "marker"
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
        message0: "GLTF position %1 rotation %2 source %3 animation %4",
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
        type:"animation-mixer",
        message0:"Animation %1 %2",
        args0:[
            {
                type:"input_dummy"
            },{
                type:"input_statement",
                name:"NAME"
            }
        ],
        output:"attribute",
        colour:90
    },
    {
        type:"clip",
        message0:"Clip %1",
        args0:[
            {
                type:"field_dropdown",
                name: "clips",
                options: [
                    ["animation_0", 'animation_0'],
                    ["animation_1", 'animation_1'],
                ]
            }
        ],
        previousStatement:"null",
        nextStatement:"null"
    },
    {
        type:"loop",
        message0:"Loop %1",
        args0:[
            {
                type:"field_dropdown",
                name: "loops",
                options: [
                    ["Once", 'once'],
                    ["repeat", 'repeat'],
                    ["pingpong", 'pingpong']
                ]
            }
        ],
        previousStatement:"null",
        nextStatement:"null"
    }
]);