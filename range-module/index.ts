import { searchSegmentLeaf } from "../mod.ts";
import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";

/**
 * 这个代码实现了一个RangeModule类，该类用于管理一系列不重叠的数字范围，并支持添加、查询和移除操作。使用了区间树（Segment Tree）数据结构来高效地处理这些操作。
 */
export default class RangeModule {
    /** 判断指定范围是否被跟踪的私有方法 */
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
    #root: SegmentTree;
    constructor(
        public left: number = Number.MIN_SAFE_INTEGER,
        public right: number = Number.MAX_SAFE_INTEGER,
    ) {
        this.#root = /** 范围模块树结构的根节点 */
            SegmentTree(
                left,
                right,
            );
    }
    /**添加指定范围的方法 */
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

    /**查询指定范围内是否存在跟踪的方法 */
    queryRange(left: number, right: number): boolean {
        return this.#isRangeTracked(left, right - 1, this.#root);
    }
    /**更新父节点值的方法 */
    #update_parents(nodes: SegmentTree[]) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            node.value = node.children.every((child) => child.value > 0)
                ? 1
                : 0;
        }
    }
    /**合并子节点的方法 */
    #merge_children(nodes: SegmentTree[]) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (node.children.every((child) => child.value > 0)) {
                node.children.length = 0;
            }
            if (
                node.children.every(
                    (child) => child.children.length === 0 && child.value === 0,
                )
            ) {
                node.children.length = 0;
            }
        }
    }
    /**移除指定范围的方法 */
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
