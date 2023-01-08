function countSubstrings(s: string): number {
    const strLen = s.length;
    let numOfPalindromicStr = 0;

    for (let i = 0; i < 2 * strLen - 1; i++) {
        let left = Math.floor(i / 2);
        let right = left + (i % 2);

        while (left >= 0 && right < strLen && s[left] === s[right]) {
            numOfPalindromicStr++;
            left--;
            right++;
        }
    }

    return numOfPalindromicStr;
}
export default countSubstrings;
