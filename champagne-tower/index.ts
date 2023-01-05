export default function champagneTower(
    poured: number,
    query_row: number,
    query_glass: number
): number {
    let row = [poured];
    for (let i = 1; i <= query_row; i++) {
        const nextRow: number[] = new Array(i + 1).fill(0);
        for (let j = 0; j < i; j++) {
            const volume = row[j];
            if (volume > 1) {
                nextRow[j] += (volume - 1) / 2;
                nextRow[j + 1] += (volume - 1) / 2;
            }
        }
        row = nextRow;
    }
    return Math.min(1, row[query_glass]);
}
