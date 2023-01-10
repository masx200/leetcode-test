export default function minPartitions(n: string): number {
    for (
        const i of Array(10)
            .fill(0)
            .map((_v, i) => 10 - i - 1)
    ) {
        if (n.includes(String(i))) {
            return i;
        }
    }
    return 0;
}
