import { complex_regexp } from './complex_regexp.ts';

export function parseComplex(num1: string): { real: number; imag: number } {
    const groups1 = complex_regexp.exec(num1)?.groups;
    if (!groups1) {
        throw Error("invalid complex");
    }
    const { real, imag } = groups1;

    return { real: parseInt(real), imag: parseInt(imag) };
}
