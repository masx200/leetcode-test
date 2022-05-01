export default function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) {
        return [];
    }

    nums.sort((a, b) => a - b);
    const cache = new Set<string>();

    const ans: number[][] = [];

    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环

        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum == 0) {
                const a = [nums[i], nums[L], nums[R]];
                const key = a.join("");
                if (!cache.has(key)) {
                    cache.add(key);
                    ans.push(a);
                }

                L++;
                R--;
            } else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }

    return ans;
}
