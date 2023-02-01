import { BinarySearchTree } from "npm:@datastructures-js/binary-search-tree@5.3.1";

export function traverseInOrder<T extends BinarySearchTree<any>>(
    tree: T,
    cb: (node: NonNullable<ReturnType<T["root"]>>) => void,
    signal?: AbortSignal,
) {
    if (typeof cb !== "function") {
        throw new Error(".traverseInOrder expects a callback function");
    }

    function traverseRecursive(current: ReturnType<T["root"]> | null) {
        if (signal?.aborted) {
            return;
        }
        if (current === null) {
            return;
        }
        //@ts-ignore
        traverseRecursive(current.getLeft());
        if (signal?.aborted) {
            return;
        }
        //@ts-ignore
        cb(current);
        //@ts-ignore
        traverseRecursive(current.getRight());
    }
    //@ts-ignore
    traverseRecursive(tree.root());
}
