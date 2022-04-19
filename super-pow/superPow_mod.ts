import { multiply_Mod } from "./multiply_Mod.ts";
import { pow_bigint_mod } from "./pow_bigint_mod.ts";

export function superPow_mod(a: number, b: number[], m: number): number {
    if (b.length === 0) {
        return 1;
    }
    if (b.length === 1) {
        return Number(pow_bigint_mod(BigInt(a), BigInt(b[0]), BigInt(m)));
    }
    let result = 1n;
    for (const e of b) {
        result = multiply_Mod(
            pow_bigint_mod(BigInt(result), BigInt(10), BigInt(m)),
            pow_bigint_mod(BigInt(a), BigInt(e), BigInt(m)),
            BigInt(m),
        );
    }
    return Number(result);
}
