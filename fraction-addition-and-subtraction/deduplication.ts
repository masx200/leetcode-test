export function deduplication<T>(iter: Iterable<T>): Array<T> {
    return Array.from(new Set(iter));
}
