import { gcd } from "../max-points-on-a-line/greatest_common_divisor.ts";

export default function isReachable(targetX: number, targetY: number): boolean {
    let g = gcd(targetX, targetY);
    while (g % 2 == 0) g /= 2;
    return g == 1;
}
