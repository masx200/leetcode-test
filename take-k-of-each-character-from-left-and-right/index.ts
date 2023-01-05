function takeCharacters(s: string, k: number): number {
    const chars = s;
    const cnt = [0, 0, 0];
    for (const c of chars) {
        cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (cnt[0] < k || cnt[1] < k || cnt[2] < k) {
        return -1;
    }
    // 使用滑动窗口找中间最长的片段使a最多移除aCnt-k个， b最多移除bCnt-k个， c最多移除cCnt-k个
    const currentCnt = [0, 0, 0];
    let maxWindowSize = 0;
    let left = 0;
    let right = 0;
    while (left < chars.length) {
        if (right < chars.length) {
            currentCnt[chars[right++].charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        while (
            (currentCnt[0] > cnt[0] - k ||
                currentCnt[1] > cnt[1] - k ||
                currentCnt[2] > cnt[2] - k) &&
            left < chars.length
        ) {
            currentCnt[chars[left++].charCodeAt(0) - "a".charCodeAt(0)]--;
        }
        maxWindowSize = Math.max(maxWindowSize, right - left);
        if (right == chars.length) {
            left++;
        }
    }
    return s.length - maxWindowSize;
}
export default takeCharacters;
