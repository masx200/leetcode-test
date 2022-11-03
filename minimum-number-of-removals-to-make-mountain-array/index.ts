export default function minimumMountainRemovals(nums: number[]): number {
    const n = nums.length;
    const l: number[] = [];
    let st: number[] = [];
    for (let i = 0; i < n; i++) {
        let left = 0,
            right = st.length;
        while (left < right) {
            const m = (left + right) >> 1;
            if (st[m] >= nums[i]) {
                right = m;
            } else {
                left = m + 1;
            }
        }
        l[i] = left + 1;
        st[left] = nums[i];
    }

    st = [];
    let res = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        let left = 0,
            right = st.length;
        while (left < right) {
            const m = (left + right) >> 1;
            if (st[m] >= nums[i]) {
                right = m;
            } else {
                left = m + 1;
            }
        }
        st[left] = nums[i];
        if (l[i] > 1 && left > 0) res = Math.min(res, n - (l[i] + left));
    }
    return res;
}
