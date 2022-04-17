import { multiply_Mod } from "./multiply_Mod.ts";

export function pow_bigint_mod(x: bigint, n: bigint, m: bigint): bigint {
    if (n < 0) {
        throw Error("result not bigint:" + x + "," + n);
    }
    const result = n === 1n
        ? x
        : x < 0
        ? (n % 2n === 0n ? 1n : -1n) * (pow_bigint_mod(-x, n, m) % m)
        : x === 1n
        ? 1n
        : x === 0n
        ? 0n
        : n === 0n
        ? 1n
        : n % 2n
        ? multiply_Mod(x, pow_bigint_mod(x, n - 1n, m), m)
        : (pow_bigint_mod(multiply_Mod(x, x, m), n / 2n, m) % m);
    return result;
}
