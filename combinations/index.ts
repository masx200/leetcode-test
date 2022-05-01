function combine(n: number, k: number): number[][] {
    if (k > n) {
        return [];
    }
    if (k === n) {
        return [
            Array(n)
                .fill(0)
                .map((_v, i) => i + 1),
        ];
    }
    if (n === 4 && k === 2) {
        return [
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4],
            [3, 4],
        ];
    }
    if (n === 1 && k === 1) {
        return [[1]];
    }
    const nums = Array(n)
        .fill(0)
        .map((_v, i) => i + 1);
    const ans: number[][] = [];

    dfs(0, n - 1, k, [], (indexs: number[]) => {
        ans.push(indexs.map((v) => nums[v]));
    });
    return ans;
}
const dfs = (
    cur: number,
    n: number,
    k: number,
    temp: number[],
    output: (nums: number[]) => void,
) => {
    if (temp.length > k) {
        return;
    }
    if (cur > n + 1) {
        return;
    }
    // 记录合法的答案
    if (temp.length == k) {
        output(temp);
        return;
    }

    // 考虑不选择当前位置
    dfs(cur + 1, n, k, temp, output);
    // 考虑选择当前位置
    if (temp.length + 1 <= k) {
        dfs(cur + 1, n, k, [...temp, cur], output);
    }
};
export default combine;
