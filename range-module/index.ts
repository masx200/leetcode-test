import { searchSegmentLeaf } from "../mod.ts";
import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";

export default class RangeModule {
    #isRangeTracked(left: number, right: number, node: SegmentTree): boolean {
        if (left > right || left > node.end || right < node.start) {
            return false;
        }
        if (node.children.length) {
            const can_cache_result = left <= node.start && right >= node.end;
            if (can_cache_result) {
                const isRangeTrackedCached = node.value;
                if (isRangeTrackedCached >= 0) {
                    return isRangeTrackedCached > 0;
                }
            }
            const isRangeTracked_result = node.children
                .filter((node) => {
                    if (left > right || left > node.end || right < node.start) {
                        return false;
                    }
                    return true;
                })
                .every((child) => this.#isRangeTracked(left, right, child));
            return isRangeTracked_result;
        } else {
            return node.value > 0;
        }
    }
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0
    );

    addRange(left: number, right: number): void {
        const parents: SegmentTree[] = [];
        const nodes = searchSegmentLeaf(left, right - 1, this.#root, {
            each: (node) => {
                if (node.children.length) {
                    parents.push(node);
                }
            },
        });
        for (const node of nodes) {
            node.value = 1;
        }
        this.#update_parents(parents);
        for (const node of parents) {
            if (node.value > 0) {
                node.children.length = 0;
            }
        }
        this.#merge_children(parents);
    }

    queryRange(left: number, right: number): boolean {
        return this.#isRangeTracked(left, right - 1, this.#root);
    }
    #update_parents(nodes: SegmentTree[]) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            node.value = node.children.every((child) => child.value > 0)
                ? 1
                : 0;
        }
    }
    #merge_children(nodes: SegmentTree[]) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (node.children.every((child) => child.value > 0)) {
                node.children.length = 0;
            }
            if (
                node.children.every(
                    (child) => child.children.length === 0 && child.value === 0
                )
            ) {
                node.children.length = 0;
            }
        }
    }
    removeRange(left: number, right: number): void {
        const parents: SegmentTree[] = [];
        const nodes = searchSegmentLeaf(left, right - 1, this.#root, {
            each: (node) => {
                if (node.children.length) {
                    parents.push(node);
                }
            },
        });
        for (const node of nodes) {
            node.value = 0;
        }
        this.#update_parents(parents);
        this.#merge_children(parents);
    }
}
