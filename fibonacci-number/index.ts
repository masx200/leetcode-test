import { fibonacci_bigint } from "./fibonacci_bigint.ts";

export default function fibonacci_Number(n: number | bigint): number | bigint {
    const result = fibonacci_bigint(BigInt(n));
    if (result < Number.MAX_SAFE_INTEGER) {
        return Number(result);
    } else {
        return result;
    }
}
