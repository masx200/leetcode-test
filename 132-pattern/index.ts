function find132pattern(nums: number[]): boolean {
    if (nums.length < 3) return false;
    // for (let i = 0, j = i + 1, k = j + 1; k < nums.length; i++, j++, k++) {
    //     if (nums[i] < nums[k] && nums[k] < nums[j]) return true;
    // }
    const st: number[] = [];
    const n = nums.length;
    let k = -Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < k) return true;

        while (st.length && (st.at(-1) as number) < nums[i]) {
            const last = st.pop();
            if (typeof last !== "number") throw Error("last");
            k = Math.max(k, last);
        }
        st.push(nums[i]);
    }
    return false;
}
export default find132pattern;
