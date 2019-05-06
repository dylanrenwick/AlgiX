const fs = require('fs');
const codeMap = require('./charMap.js');

let code = process.argv[2];
let input = process.argv[3];
if (code === "-f") {
    code = fs.readFileSync(process.argv[3]);
    input = process.argv[4];
}

let accu = 0;
var inputIndex = 1;
var codeIndex = 1;
var skip = false;
var lastOpen = -1;

function error(msg) {
    console.log(code);

    console.log(msg)
    console.log("On input " + inputIndex + " at char " + codeIndex);

    process.exit(1);
}

for (let i of input) {
    accu = i.charCodeAt(0);
    if (!Number.isNaN(x = parseInt(i))) accu = x;

    for (let codeIndex = 0; codeIndex < code.length; codeIndex++) {
        let c = code[codeIndex];
        if (skip && c !== skip) continue;
        skip = false;
        if (codeMap[c]) {
            x = codeMap[c](accu);
            if (typeof(x) === "number") accu = x;
        }
        else error("Invalid char: " + c);
    }

    process.stdout.write(String.fromCharCode(accu));
    inputIndex++;
}