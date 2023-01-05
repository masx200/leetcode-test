function numOfMinutes(
    n: number,
    headID: number,
    manager: number[],
    informTime: number[]
): number {
    const max: number[] = [];
    const pretime: number[] = new Array(n).fill(-1);
    // 顶层
    pretime[headID] = 0;

    function dfs(currentNode: number): number {
        if (pretime[currentNode] >= 0) return pretime[currentNode];

        pretime[currentNode] =
            informTime[manager[currentNode]] + dfs(manager[currentNode]);
        return pretime[currentNode];
    }

    // 从叶子节点向上搜索
    for (let i = 0; i < n; i++) {
        if (informTime[i] !== 0) continue;

        max.push(dfs(i));
    }

    return Math.max(...max);
}
export default numOfMinutes;
