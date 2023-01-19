export function* InOrderIterator<T extends { left: T | null; right: T | null }>(
    root: T | null,
): Generator<T> {
    if (!root) {
        return;
    }
    yield* InOrderIterator(root.left);
    yield root;
    yield* InOrderIterator(root.right);
}
