//[q,w] 10*q+w
//a^{x+y}=a^x * a^y

import { multiply_Mod } from "./multiply_Mod.ts";
import { pow_bigint_mod } from "./pow_bigint_mod.ts";

//a^{10*x+y}=a^(10*x) * a^y =a^y *(a^x)^10=a^y *(a^10)^x
export function superPow_mod(a: number, b: number[], m: number): number {
    if (b.length === 0) {
        return 1;
    }
    if (b.length === 1) {
        return Number(pow_bigint_mod(BigInt(a), BigInt(b[0]), BigInt(m)));
    }
    let result = 1n;
    // for (let i = b.length - 1; i >= 0; --i) {
    //     result = Number(multiply_Mod(result, pow_bigint_mod(BigInt(a), BigInt(b[i]), BigInt(m)), m))
    //     a = Number(pow_bigint_mod(BigInt(a), BigInt(10), BigInt(m)));
    // }
    // const a_y = Number(pow_bigint_mod(BigInt(a), BigInt(b.slice(-1)[0]), BigInt(m)))
    // const a_10 = Number(pow_bigint_mod(BigInt(a), BigInt(10), BigInt(m)))
    // const a_10_x = superPow_mod(a_10, b.slice(0, -1), m)
    // return Number(multiply_Mod(a_y, a_10_x, m))
    for (const e of b) {
        result = multiply_Mod(
            pow_bigint_mod(BigInt(result), BigInt(10), BigInt(m)),
            pow_bigint_mod(BigInt(a), BigInt(e), BigInt(m)),
            BigInt(m),
        );
    }
    return Number(result);
}
