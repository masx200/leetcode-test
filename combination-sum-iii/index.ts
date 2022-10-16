function combinationSum3(k: number, n: number): number[][] {
    if (n < k || n > 45) {
        return [];
    }
    const nums = Array(Math.min(9, n - k + 1))
        .fill(0)
        .map((_, i) => i + 1);
    const visited = new Set<number>();
    const ans: number[][] = [];
    function dfs(path: number[], sum: number): void {
        // console.log(path, sum);
        if (sum > n || path.length > k) return;

        if (
            path.length >= 2 && path[path.length - 1] <= path[path.length - 2]
        ) {
            return;
        }
        if (path.length === k && sum === n) {
            ans.push([...path]);
            return;
        }
        for (const v of nums) {
            if (visited.has(v)) continue;
            path.push(v);
            visited.add(v);
            dfs(path, sum + v);
            path.pop();
            visited.delete(v);
        }
    }
    dfs([], 0);
    return ans;
}
export default combinationSum3;
