export default function decompressRLElist(nums: number[]): number[] {
    const ans: number[] = [];
    for (let i = 0; i < nums.length; i += 2) {
        const [count, value] = [nums[i], nums[i + 1]];

        for (let i = 0; i < count; i++) {
            ans.push(value);
        }
        // ans.push(...Array(count).fill(value))
    }
    return ans;
}
