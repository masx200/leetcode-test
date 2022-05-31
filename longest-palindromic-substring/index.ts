export default function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    const length = s.length;
    let ans = "";
    let i = 0;
    while (i < length) {
        const str1 = expand(s, i, i);
        const str2 = expand(s, i, i + 1);
        ans = [str1, str2].reduce((p, v) => (p.length > v.length ? p : v), ans);
        if (ans === s) return s;
        i = i + 1;
    }
    return ans;
}

function expand(s: string, i: number, j: number): string {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }

    const str = s.slice(i + 1, j);

    return str;
}
/* function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    const length = s.length;
    let max_length = 1;
    let start = 0;
    const cache = new Array<boolean>(length * (length + 1) / 2);
    function isPalindromic(i: number, j: number): boolean {
        const key = i >= j ? (i * (i + 1) / 2) + j : (j * (j + 1) / 2) + i;
        const cached = cache[key];
        if (typeof cached !== "undefined") {
            return cached;
        }
        const result = i === j
            ? true
            : i + 1 === j
            ? s[i] === s[j]
            : s[i] === s[j] && isPalindromic(i + 1, j - 1);
        cache[key] = result;
        return result;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            // console.log(i, j)
            if (i <= j && isPalindromic(i, j) && j - i + 1 > max_length) {
                max_length = j - i + 1;
                start = i;
            }
        }
    }

    return s.slice(start, start + max_length);
}
 */
