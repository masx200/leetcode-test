import {
    PrefixTreeInsert,
} from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTreeSearchPrefix } from "../implement-trie-prefix-tree/PrefixTreeSearchPrefix.ts";
import { PrefixTreeWithSum } from "./PrefixTreeWithSum.ts";

class MapSum {
    #root = new PrefixTreeWithSum();
    #map = new Map<string, number>();
    insert(key: string, val: number): void {
        const value = this.#map.get(key) ?? 0;
        if (value === 0) {
            PrefixTreeInsert(this.#root, key, {
                each: (node) => (node.sum += val),
                create: () => new PrefixTreeWithSum(),
            });
        } else {
            const delta = -value + val;
            PrefixTreeSearchPrefix(this.#root, key, {
                each(node) {
                    node.sum += delta;
                },
            });
        }
        this.#map.set(key, val);
    }

    sum(prefix: string): number {
        return PrefixTreeSearchPrefix(this.#root, prefix)?.sum ?? 0;
    }
}

export default MapSum;
