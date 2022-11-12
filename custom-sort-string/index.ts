export default function customSortString(order: string, s: string): string {
    const indexes = new Map<string, number>([...order].map((v, i) => [v, i]));

    const arrays = Array(order.length)
        .fill(0)
        .map(() => [] as string[]);

    for (const c of s) {
        arrays[indexes.get(c) ?? 0].push(c);
    }
    return arrays.flat().join("");
}
