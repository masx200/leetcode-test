import {
    BinarySearchTree,
    BinarySearchTreeNode,
} from "npm:@datastructures-js/binary-search-tree@5.3.1";
import { HashMap } from "./HashMap.ts";

export default class MovieRentingSystem {
    #price = new HashMap<[number, number], number>([], JSON.stringify);
    #valid = new Map<number, BinarySearchTree<[number, number]>>();

    #rent = new BinarySearchTree<[number, number, number]>((a, b) =>
        a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
    );
    constructor(_n: number, entries: number[][]) {
        for (const [shop, movie, price] of entries) {
            this.#price.set([shop, movie], price);

            const tree = this.#valid.get(movie) ??
                new BinarySearchTree((a, b) =>
                    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
                );

            tree.insert([price, shop]);
            this.#valid.set(movie, tree);
        }
    }

    search(movie: number): number[] {
        const valid = this.#valid;
        const tree = this.#valid.get(movie);
        if (!valid.has(movie) || !tree) return [];

        const ret: number[] = [];

        for (const node of InOrderIterator(tree.root())) {
            ret.push(node.getValue()[1]);

            if (ret.length >= 5) break;
        }
        return ret;
    }

    rent(shop: number, movie: number): void {
        const price = this.#price.get([shop, movie]);
        if (typeof price === "undefined") return;
        this.#valid.get(movie)?.remove([price, shop]);

        this.#rent.insert([price, shop, movie]);
    }

    drop(shop: number, movie: number): void {
        const price = this.#price.get([shop, movie]);
        if (typeof price === "undefined") return;
        this.#valid.get(movie)?.insert([price, shop]);

        this.#rent.remove([price, shop, movie]);
    }

    report(): number[][] {
        const tree = this.#rent;
        const ret: number[][] = [];

        for (const node of InOrderIterator(tree.root())) {
            ret.push(node.getValue().slice(1));

            if (ret.length >= 5) break;
        }
        return ret;
    }
}
export function* InOrderIterator<T>(
    root: BinarySearchTreeNode<T> | null,
): Generator<BinarySearchTreeNode<T>> {
    if (!root) return;
    yield* InOrderIterator(root.getLeft());
    yield root;
    yield* InOrderIterator(root.getRight());
}
