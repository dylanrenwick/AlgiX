module.exports = {
    '+': (a, s) => ++a,
    '-': (a, s) => --a,
    'p': (a, s) => Math.PI * Math.pow(a, 2),
    'c': (a, s) => Math.PI * a,
    'h': (a, s) => Math.sqrt(Math.pow(a/2,2),Math.pow(a/2,2)),
    '[': (a, s) => { if (a === 0) s.skip = ']'; s.lastOpen = s.codeIndex; },
    ']': (a, s) => { if (s.lastOpen < 0) s.error("Found ']' with no matching '['"); if (a !== 0) s.codeIndex = s.lastOpen; else s.lastOpen = -1; },
    ',': (a, s) => process.stdout.write(String.fromCharCode(Math.floor(a))),
    '.': (a, s) => process.stdout.write(a.toString()),
    '>': (a, s) => { s.inputIndex++; s.codeIndex = 0; },
    '<': (a, s) => { s.inputIndex--; s.codeIndex = 0; },
};