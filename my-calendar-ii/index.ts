import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";

export default class MyCalendarTwo {
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
    );
    // #result = 0;

    #search(start: number, end: number, node: SegmentTree): SegmentTree[] {
        start = Math.max(start, node.start);
        end = Math.min(end, node.end);
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

            node.children.push(
                ...segments.map(([a, b]) => SegmentTree(a, b, node.value)),
            );
        }
        if (node.children.length) {
            return this.#searchChildren(start, end, node.children);
        }

        return [];
    }

    #searchChildren(
        start: number,
        end: number,
        nodes: SegmentTree[],
    ): SegmentTree[] {
        const trees: SegmentTree[] = [];
        for (const child of nodes) {
            trees.push(...this.#search(start, end, child));
        }
        return trees;
    }

    #increase(nodes: SegmentTree[]): boolean {
        for (const node of nodes) {
            if (node.value >= 2) return false;
        }
        for (const node of nodes) {
            node.value += 1;
            // this.#result = Math.max(this.#result, node.value);
        }
        return true;
    }
    book(start: number, end: number): boolean {
        const nodes = this.#search(start, end - 1, this.#root);

        return this.#increase(nodes);
    }
}
