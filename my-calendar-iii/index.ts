import { SegmentTree } from "./SegmentTree.ts";

export default class MyCalendarThree {
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
    );
    #result = 0;

    #search(start: number, end: number, node: SegmentTree): SegmentTree[] {
        start = Math.max(start, node.start);
        end = Math.min(end, node.end);
        // console.log(start, end, node);
        if (start > end || start > node.end || end < node.start) {
            return [];
        }

        if (start <= node.start && end >= node.end) {
            return node.children.length
                ? this.#searchChildren(start, end, node.children)
                : [node];
        }

        if (!node.children.length) {
            const points = Array.from(
                new Set([node.start, node.end + 1, start, end + 1]),
            ).sort((a, b) => a - b);
            const segments = points
                .map((v, i, a) => [v, a[i + 1] - 1])
                .slice(0, -1)
                .filter(([a, b]) => node.start <= a && node.end >= b);
            /* children 按照从小到大排列 */
            node.children.push(
                ...segments.map(([a, b]) => SegmentTree(a, b, node.value)),
            );
        }

        return this.#searchChildren(start, end, node.children);
    }

    #searchChildren(
        start: number,
        end: number,
        nodes: SegmentTree[],
    ): SegmentTree[] {
        // console.log([start, end, nodes]);
        // return nodes.map((child) => this.#search(start, end, child)).flat();
        const trees: SegmentTree[] = [];
        for (const child of nodes) {
            trees.push(...this.#search(start, end, child));
        }
        return trees;
    }

    #increase(nodes: SegmentTree[]) {
        for (const node of nodes) {
            node.value += 1;
            this.#result = Math.max(this.#result, node.value);
        }
    }
    book(start: number, end: number): number {
        const nodes = this.#search(start, end - 1, this.#root);

        this.#increase(nodes);

        return this.#result;
    }
}
