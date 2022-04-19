export default function lexicalOrder(n: number): number[] {
    return Array.from({ length: n })
        .map((_v, i) => i + 1)
        .sort();
}
