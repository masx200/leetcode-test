export default function allPathsSourceTarget(graph: number[][]): number[][] {
    const res: number[][] = [];
    dfs(graph, res, 0, [0]);
    return res;
}
function dfs(
    graph: number[][],
    res: number[][],
    index: number,
    path: number[]
) {
    if (index === graph.length - 1) {
        res.push(Array.from(path));
        return;
    }
    for (const next of graph[index]) {
        path.push(next);
        dfs(graph, res, next, path);
        path.pop();
    }
}
