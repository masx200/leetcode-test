import { climbing_stairs_bigint } from './climbing_stairs_bigint.ts';

export default function climbing_stairs(n: number | bigint): number | bigint {
    const result = climbing_stairs_bigint(BigInt(n));
    if (result < Number.MAX_SAFE_INTEGER) {
        return Number(result);
    } else {
        return result;
    }
}
