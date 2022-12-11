export default function finalValueAfterOperations(
    operations: string[],
): number {
    return operations.reduce(
        (p, v) => (["X++", "++X"].includes(v) ? p + 1 : p - 1),
        0,
    );
}
