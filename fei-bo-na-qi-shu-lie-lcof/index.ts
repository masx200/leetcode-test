import { fibonacci_bigint } from "../fibonacci-number/fibonacci_bigint.ts";

export default function fei_bo_na_qi_shu_lie_lcof(n: number): number {
    return Number(fibonacci_bigint(BigInt(n)) % BigInt(1e9 + 7));
}
