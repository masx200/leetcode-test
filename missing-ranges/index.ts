export default function findMissingRanges(
    nums: number[],
    lower: number,
    upper: number
): string[] {
    const ans: string[] = [];
    nums.push(upper + 1);

    let last = lower - 1;

    for (const num of nums) {
        if (num - last === 2) {
            ans.push(String(last + 1));
        } else if (num - last > 2) {
            ans.push(`${last + 1}->${num - 1}`);
        }
        last = num;
    }
    return ans;
}
