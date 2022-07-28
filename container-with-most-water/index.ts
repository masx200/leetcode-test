function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let ans = 0;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        ans = Math.max(ans, area);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return ans;
}
export default maxArea;
