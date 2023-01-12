import { TreeNode } from "../mod.ts";

export default function verticalTraversal(root: TreeNode | null): number[][] {
    const res = [] as number[][];
    if (!root) return res;
    let current = [[0, 0, root]] as [number, number, TreeNode][];
    const map = new Map<number, [number, number][]>();
    while (current.length > 0) {
        const next = [] as [number, number, TreeNode][];

        for (const [x, y, node] of current) {
            const arr = map.get(x) ?? ([] as [number, number][]);
            map.set(x, arr);
            arr.push([y, node.val]);
            if (node.left) next.push([x - 1, y + 1, node.left]);
            if (node.right) next.push([x + 1, y + 1, node.right]);
        }

        current = next;
    }

    for (
        const arr of Array.from(map)
            .sort((a, b) => a[0] - b[0])
            .map((a) => a[1])
    ) {
        res.push(
            arr
                .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
                .map((a) => a[1]),
        );
    }
    return res;
}
