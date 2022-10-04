export default function diagonalSort(mat: number[][]): number[][] {
    const map = new Map<number, number[]>();
    const index = new Map<number, number>();
    mat.forEach((a, i) =>
        a.forEach((v, j) => {
            const nums = map.get(i - j) ?? [];
            nums.push(v);
            map.set(i - j, nums);
            index.set(i - j, 0);
        })
    );
    const ans = Array.from(mat, (v) => Array.from(v));

    map.forEach((nums) => nums.sort((a, b) => a - b));

    mat.forEach((a, i) =>
        a.forEach((_, j) => {
            const nums = map.get(i - j) ?? [];
            const k = index.get(i - j) ?? 0;
            ans[i][j] = nums[k];
            index.set(i - j, k + 1);
        })
    );
    return ans;
}
