function storeWater(bucket: number[], vat: number[]): number {
    const m = Math.max(...vat);
    if (m === 0) return 0;
    return Math.min(
        m + 1,
        ...Array(m - 1)
            .fill(0)
            .map((_, i) => i + 1)
            .map((i) => count(bucket, vat, i)),
    );
}
function count(bucket: number[], vat: number[], i: number): number {
    return (
        bucket.reduce(function (acc, cur, j) {
            return acc + Math.max(0, Math.ceil(vat[j] / i) - cur);
        }, 0) + i
    );
}
export default storeWater;
