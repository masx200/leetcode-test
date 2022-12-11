export default function deleteTreeNodes(
    nodes: number,
    parent: number[],
    value: number[],
): number {
    const children: number[][] = Array.from(parent)
        .fill(0)
        .map(() => []);
    for (const [i, p] of parent.entries()) {
        if (p >= 0) {
            children[p].push(i);
        }
    }
    function dfs(node: number) {
        // console.log(node);
        for (const c of children[node]) {
            dfs(c);
        }
        sum[node] = value[node] +
            children[node].reduce((a, c) => a + sum[c], 0);
        count[node] = sum[node] !== 0
            ? 1 + children[node].reduce((a, c) => a + count[c], 0)
            : 0;
        // console.log(node);
    }
    const sum: number[] = Array.from(parent).fill(0);
    const count: number[] = Array(nodes).fill(0);
    dfs(0);
    // console.log({ parent, value, children, sum, count });
    return count[0];
}
