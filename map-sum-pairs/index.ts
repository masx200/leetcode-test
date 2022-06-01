import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTreeSearchPrefix } from "../implement-trie-prefix-tree/PrefixTreeSearchPrefix.ts";
import { PrefixTreeWithSum } from "./PrefixTreeWithSum.ts";

class MapSum {
    #root = new PrefixTreeWithSum();

    insert(key: string, val: number): void {
        const value = PrefixTreeSearchPrefix(this.#root, key)?.value ?? 0;
        if (value === 0) {
            PrefixTreeInsert(this.#root, key, {
                each: (node) => (node.sum += val),
                create: () => new PrefixTreeWithSum(),
                end(node) {
                    node.value = val;
                },
            });
        } else {
            const delta = -value + val;
            PrefixTreeSearchPrefix(this.#root, key, {
                each(node) {
                    node.sum += delta;
                },
                end(node) {
                    node.value = val;
                },
            });
        }
    }

    sum(prefix: string): number {
        return PrefixTreeSearchPrefix(this.#root, prefix)?.sum ?? 0;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
export default MapSum;
