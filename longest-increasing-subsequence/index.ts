export default function lengthOfLIS(nums: number[]): number {
    const tails = Array.from(nums).fill(0);
    let res = 0;

    for (const num of nums) {
        let i = 0;
        let j = res;
        while (i < j) {
            const m = Math.floor((i + j) / 2);
            if (tails[m] < num) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        tails[i] = num;
        if (res === j) res++;
    }
    return res;
}
