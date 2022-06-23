export function counter<T>(values: Iterable<T>): Map<T, number> {
    const cnts = new Map<T, number>();
    for (const word of values) {
        cnts.set(word, (cnts.get(word) ?? 0) + 1);
    }
    return cnts;
}
