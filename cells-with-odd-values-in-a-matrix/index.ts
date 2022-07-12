import { binary_count_one_bigint } from "./binary_count_one_bigint.ts";

function oddCells(m: number, n: number, indices: number[][]): number {
    let row = 0n;
    let col = 0n;
    for (const [r, c] of indices) {
        row ^= 1n << BigInt(r);
        col ^= 1n << BigInt(c);
    }

    const x = Number(binary_count_one_bigint(row));
    const y = Number(binary_count_one_bigint(col));
    return x * n + y * m - 2 * x * y;
}
export default oddCells;
