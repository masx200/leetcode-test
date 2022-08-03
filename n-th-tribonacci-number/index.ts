function tribonacci(n: number): number {
    return Math.round(Math.pow(X, n) * Y);
}
const SQ33 = Math.sqrt(33);
const AP = Math.cbrt(19 + 3 * SQ33);
const AN = Math.cbrt(19 - 3 * SQ33);
const B = Math.cbrt(586 + 102 * SQ33);
const X = (AP + AN + 1) / 3;
const Y = (3 * B) / (B * B - 2 * B + 4);
export default tribonacci;
