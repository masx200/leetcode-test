export function* reverseInOrderIterator<
    T extends { left: T | null; right: T | null },
>(root: T | null): Generator<T> {
    if (!root) {
        return;
    }
    yield* reverseInOrderIterator(root.right);
    yield root;
    yield* reverseInOrderIterator(root.left);
}
