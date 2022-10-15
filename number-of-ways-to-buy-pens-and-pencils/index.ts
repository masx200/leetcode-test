export default function waysToBuyPensPencils(
    total: number,
    cost1: number,
    cost2: number,
): number {
    if (cost1 < cost2) {
        [cost1, cost2] = [cost2, cost1];
    }
    return Array(Math.floor(total / cost1 + 1)).fill(0).reduce((a, _, i) =>
        a +
        Math.floor(1 + (total - cost1 * i) / cost2), 0);
}
