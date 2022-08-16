function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const ans: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left: number = j + 1;
            let right: number = nums.length - 1;
            while (left < right) {
                const res: number =
                    nums[i] + nums[j] + nums[left] + nums[right];
                if (res > target) {
                    right--;
                } else if (res < target) {
                    left++;
                } else {
                    ans.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
    }
    return ans;
}

export default fourSum;
