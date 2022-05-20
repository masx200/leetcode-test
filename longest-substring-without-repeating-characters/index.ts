function lengthOfLongestSubstring(s: string): number {
    const occ = new Set();
    let right = -1;
    let ans = 0;
    const n = s.length;
    for (const i of Array.prototype.keys.call(s)) {
        if (i !== 0) {
            occ.delete(s[i - 1]);
        }
        while (right + 1 < n && !occ.has(s[right + 1])) {
            occ.add(s[right + 1]);
            right++;
        }
        ans = Math.max(ans, right - i + 1);
    }
    return ans;
}
export default lengthOfLongestSubstring;
