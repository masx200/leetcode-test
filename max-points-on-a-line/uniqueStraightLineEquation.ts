import { greatest_common_divisor } from "./greatest_common_divisor.ts";

export function uniqueStraightLineEquation(
    a: number,
    b: number,
    c: number,
): [number, number, number] {
    if (c < 0) {
        /* 保证c不为负数 */
        return uniqueStraightLineEquation(-a, -b, -c);
    }
    /* 除以最大公约数 */
    const k = Math.abs(greatest_common_divisor(Math.abs(a), Math.abs(b)));
    a /= k;
    b /= k;
    c /= k;

    return [a, b, c];
}
