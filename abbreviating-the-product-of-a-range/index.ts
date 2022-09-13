export default function abbreviateProduct(left: number, right: number): string {
    const a = Array(right - left + 1).fill(0).map((_, i) =>
        BigInt(i) + BigInt(left)
    ).reduce((a, v) => a * v).toString();
    //@ts-ignore
    const index = Array.prototype.findLastIndex.call(a, (v) => v !== "0");

    const C = index >= 0 ? a.length - index - 1 : 0;
    const D = a.length - C;
    return (D > 10
        ? a.slice(0, 5) + "..." + a.slice(D - 5, D)
        : a.slice(0, D)) + "e" + C;
}
