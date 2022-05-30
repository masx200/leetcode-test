export default function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    const length = s.length;
    let max_length = 1;
    let start = 0;
    const isPalindromic = (() => {
        const cache = new Array<boolean>((length * (length + 1)) / 2);
        // console.log(cache)
        return function get(i: number, j: number): boolean {
            const key = i >= j ? (i * (i + 1)) / 2 + j : (j * (j + 1)) / 2 + i;
            const cached = cache[key];
            if (typeof cached !== "undefined") {
                return cached;
            }
            const result =
                i === j
                    ? true
                    : i + 1 === j
                    ? s[i] === s[j]
                    : s[i] === s[j] && get(i + 1, j - 1);
            cache[key] = result;
            return result;
        };
    })();

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
