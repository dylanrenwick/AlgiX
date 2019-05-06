const fs = require('fs');
const codeMap = require('./charMap.js');

let accu = 0;

const state = {
    lastOpen: -1,
    skip: false,
    inputIndex: 1,
    codeIndex: 1,
    error: error,
    debug: debug,
    isDbg: false,
    char: true,
    ready: true
};

let codearg = process.argv.indexOf('-f');
let inputarg = process.argv.indexOf('-i');

if (codearg < 0) throw new Error("Could not find -f argument");

emit("Reading " + process.argv[codearg + 1]);
let code = fs.readFileSync(process.argv[codearg + 1], 'utf8');
emit("Code is: '" + code + "'");
let input = "0";
if (inputarg >= 0) {
    input = process.argv[inputarg + 1];
    emit("Input is: '" + input + "'");
    state.ready = true;
} else {
    emit("STDIN input support coming soon");
    emit("Defaulting input to '0'");
}

state.isDbg = process.argv.includes('-d');
state.char = !process.argv.includes('-x')

function error(msg) {
    console.log(code);

    console.log(msg)
    console.log("On input " + state.inputIndex + " at char " + state.codeIndex);

    process.exit(1);
}
function debug(msg) {
    if (!state.isDbg) return;
    process.stderr.write("Debug: " + msg + "\n");
}
function emit(msg) {
    process.stderr.write(msg + "\n");
}

for (state.inputIndex = 0; state.inputIndex < input.length; state.inputIndex++) {
    let i = input[state.inputIndex];
    accu = i.charCodeAt(0);
    if (!Number.isNaN(x = parseInt(i))) accu = x;

    for (state.codeIndex = 0; state.codeIndex < code.length; state.codeIndex++) {
        let c = code[state.codeIndex];
        if (state.skip && c !== state.skip) continue;
        state.skip = false;
        debug("Char: " + c);
        if (codeMap[c]) {
            x = codeMap[c](accu, state);
            if (typeof(x) === "number") accu = x;
            debug("Accu: " + accu);
        }
        else error("Invalid char: " + c);
    }

    process.stdout.write(state.char ? String.fromCharCode(Math.floor(accu)) : accu.toString());
    state.inputIndex++;
}