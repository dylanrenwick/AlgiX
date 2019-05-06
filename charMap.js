module.exports = {
    '+': (a) => ++a,
    '-': (a) => --a,
    'p': (a) => Math.PI * Math.pow(a, 2),
    'c': (a) => Math.PI * a,
    'h': (a) => Math.sqrt(Math.pow(a/2,2),Math.pow(a/2,2)),
    '[': (a) => { if (a === 0) skip = ']'; return a; },
    ']': (a) => { if (lastOpen < 0) error("Found ']' with no matching '['"); if (a !== 0) codeIndex = lastOpen; else lastOpen = -1; },
    ',': (a) => process.stdout.write(String.fromCharCode(a)),
    '.': (a) => process.stdout.write(a.toString()),
    '>': (a) => { inputIndex++; codeIndex = 0; },
    '<': (a) => { inputIndex--; codeIndex = 0; },
};