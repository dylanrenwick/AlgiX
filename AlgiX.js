const fs = require('fs');
const codeMap = require('./charMap.js');

let code = process.argv[2];
let input = process.argv[3];
if (code === "-f") {
    code = fs.readFileSync(process.argv[3]);
    input = process.argv[4];
}

let accu = 0;

var state = {
    lastOpen: -1,
    skip: false,
    inputIndex: 1,
    codeIndex: 1,
    error: error,
    debug: debug
};

function error(msg) {
    console.log(code);

    console.log(msg)
    console.log("On input " + state.inputIndex + " at char " + state.codeIndex);

    process.exit(1);
}
function debug(msg) {
    console.log("Debug: " + msg);
}

for (state.inputIndex = 0; state.inputIndex < input.length; state.inputIndex++) {
    let i = input[state.inputIndex];
    accu = i.charCodeAt(0);
    if (!Number.isNaN(x = parseInt(i))) accu = x;

    for (state.codeIndex = 0; state.codeIndex < code.length; state.codeIndex++) {
        let c = code[state.codeIndex];
        if (state.skip && c !== state.skip) continue;
        state.skip = false;
        if (codeMap[c]) {
            x = codeMap[c](accu, state);
            if (typeof(x) === "number") accu = x;
        }
        else error("Invalid char: " + c);
    }

    process.stdout.write(String.fromCharCode(accu));
    state.inputIndex++;
}