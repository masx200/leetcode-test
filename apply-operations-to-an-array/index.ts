export default function applyOperations(nums: number[]): number[] {
    nums.forEach((v, i, a) => {
        if (i === a.length - 1) return;

        if (v === a[i + 1]) {
            a[i] = 2 * v;
            a[i + 1] = 0;
        }
    });

    const res = nums.filter(Boolean);

    res.push(...Array(nums.length - res.length).fill(0));

    return res;
}
