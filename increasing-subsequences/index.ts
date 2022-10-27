export default function findSubsequences(nums: number[]): number[][] {
    const result: number[][] = [];
    const path: number[] = [];
    function backtracing(startIndex: number) {
        if (path.length > 1) {
            result.push(path.slice());
        }
        const uset: boolean[] = [];
        for (let i = startIndex; i < nums.length; i++) {
            if (
                (path.length > 0 && nums[i] < path[path.length - 1]) ||
                uset[nums[i] + 100]
            ) {
                continue;
            }
            uset[nums[i] + 100] = true;
            path.push(nums[i]);
            backtracing(i + 1);
            path.pop();
        }
    }
    backtracing(0);
    return result;
}
