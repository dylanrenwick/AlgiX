# AlgiX

AlgiX is an odd language.  
It consists of only an accumulator, and some operators.

At runtime, input is automatically read, and each non-numerical character in input is converted to its corresponding charcode.

Then for each value `x` in input, the accumulator is set to `x`, and the entire program is ran.  
Upon termination, the accumulator's value is converted back to a character and writen to STDOUT.

## Usage

AlgiX is written in node, so you will need node installed. It was developed using node 10.15.3, but should work on most versions.

Usage:  
`node AlgiX.js [options] -f <filename> -i <inputFile> [options]`

Optional args:

| X  | Purpose                                                                        |
|----|--------------------------------------------------------------------------------|
| -x | Changes implicit output of each input to numerical value rather than character |
| -d | Shows additional debug info in STDERR                                          |

**Note:** If no input file is given, and no input is given via STDIN, input is assumed to be `"0"`

## Operators

| X   | Modification of `a`                                                                                             | Side effects                                         |
|-----|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| `+` | Increment                                                                                                       |                                                      |
| `-` | Decrement                                                                                                       |                                                      |
| `p` | Set `a` to the area of a circle with radius `a`                                                                 |                                                      |
| `c` | Set `a` to the diameter of a circle with circumference `a`                                                      |                                                      |
| `h` | Set `a` to the length of the hypotenuse of a right angle triangle where both known sides have a length of `a/2` |                                                      |
| `[` |                                                                                                                 | If `a` is 0, skip all code until the next `]` or EOF |
| `]` |                                                                                                                 | If `a` is not 0, jump back to the last `[`           |
| `,` |                                                                                                                 | Print `a` as a character                             |
| `.` |                                                                                                                 | Print `a` as a numerical value                       |
| `>` |                                                                                                                 | Immediately skip to the next input value             |
| `<` |                                                                                                                 | Immediately jump back to the previous input value    |
| `0` | Set `a` to 0                                                                                                    |                                                      |
