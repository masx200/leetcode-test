import { climbing_stairs_bigint as getClimbStairs } from "../mod.ts";

export default function numWays(n: number): number {
    return Number(getClimbStairs(BigInt(n)) % 1000000007n);
}
