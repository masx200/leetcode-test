type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
    arr: MultidimensionalArray,
): Generator<number, void, unknown> {
    for (const a of arr) {
        if (typeof a === "number") yield a;
        else {
            yield* inorderTraversal(a);
        }
    }
}
export default inorderTraversal;

export type { MultidimensionalArray };
