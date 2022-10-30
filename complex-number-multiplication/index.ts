import { parseComplex } from './parse_complex.ts';

function complexNumberMultiply(num1: string, num2: string): string {
    const { real: real1, imag: imag1 } = parseComplex(num1);
    const { real: real2, imag: imag2 } = parseComplex(num2);
    return [
        real1 * real2 - imag1 * imag2,
        "+",
        real1 * imag2 + imag1 * real2,
        "i",
    ].join("");
}

export default complexNumberMultiply;
