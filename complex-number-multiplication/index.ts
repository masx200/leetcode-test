const complex_regexp = /^(?<real>\-?\d+)\+(?<imag>\-?\d+)\i$/;
function complexNumberMultiply(num1: string, num2: string): string {
    const [real1, imag1] = parse_complex(num1);
    const [real2, imag2] = parse_complex(num2);
    return [
        real1 * real2 - imag1 * imag2,
        "+",
        real1 * imag2 + imag1 * real2,
        "i",
    ].join("");
}

function parse_complex(num1: string) {
    const groups1 = complex_regexp.exec(num1)?.groups;
    if (!groups1) {
        throw Error("invalid complex");
    }
    const { real, imag } = groups1;

    return [parseInt(real), parseInt(imag)];
}
export default complexNumberMultiply;
