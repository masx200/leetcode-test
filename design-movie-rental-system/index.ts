import { BinarySearchTreeNode } from "https://esm.sh/v92/@datastructures-js/binary-search-tree@5.0.2/src/binarySearchTreeNode.js";
import { BinarySearchTree } from "https://esm.sh/@datastructures-js/binary-search-tree@5.0.2/";

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
export class HashMap<K, V> extends Map<K, V> {
    get size() {
        return this.#keys.size;
    }
    #values = new Map<string | number, V>();
    #keys = new Map<string | number, K>();
    #hash: (key: K) => string | number;
    clear(): void {
        super.clear();
        this.#keys.clear();
        this.#values.clear();
    }
    constructor(
        entries?: Iterable<[K, V]>,
        hash: (key: K) => string | number = JSON.stringify,
    ) {
        super();
        this.#hash = hash;

        if (entries) {
            for (const [k, v] of entries) {
                this.set(k, v);
            }
        }
    }
    has(key: K): boolean {
        return this.#values.has(this.#hash(key));
    }

    get(key: K): V | undefined {
        return this.#values.get(this.#hash(key));
    }
    set(key: K, value: V): this {
        const k = this.#hash(key);
        this.#values.set(k, value);
        this.#keys.set(k, key);
        return this;
    }

    delete(key: K): boolean {
        const k = this.#hash(key);
        if (this.#values.has(k)) {
            this.#keys.delete(k);
            this.#values.delete(k);
            return true;
        }
        return false;
    }
    forEach(
        callbackfn: (
            value: V,
            key: K,
            map: Map<K, V>,
        ) => void,
        thisArg?: any,
    ): void {
        this.#values.forEach((v, k) => {
            const key = this.#keys.get(k) as K;
            callbackfn.call(thisArg, v, key, this);
        }, thisArg);
    }
    values(): IterableIterator<V> {
        return this.#values.values();
    }
    keys(): IterableIterator<K> {
        return this.#keys.values();
    }
    *entries(): IterableIterator<[K, V]> {
        for (const [k, key] of this.#keys.entries()) {
            yield [key, this.#values.get(k) as V];
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
