import { SqrtNumber } from "./SqrtNumber.ts";

export default function mySqrt(x: number): number {
    if (x < 0) {
        throw Error("should greater than 0:" + x);
    }
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    const delta = 1e-1;
    const y = SqrtNumber(x, delta);
    return Math.floor(Math.abs(y));
}
