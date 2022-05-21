export default function findCircleNum(isConnected: number[][]): number {
    const m = isConnected.length;
    if (m === 0) return 0;
    const n = isConnected[0].length;
    if (n === 0) return 0;
    const cache = new Set<number>();
    let provinces = 0;

    for (let i = 0; i < m; i++) {
        if (!cache.has(i)) {
            provinces++;
            dfs(i);
        }
    }
    function dfs(i: number) {
        if (cache.has(i)) {
            return;
        }
        cache.add(i);

        for (
            const [j] of [...isConnected[i].entries()].filter(
                ([j, v]) => v === 1 && i !== j,
            )
        ) {
            dfs(j);
        }
    }
    return provinces;
}
