export default function minMovesToMakePalindrome(s: string): number {
    if (s.length <= 1) return 0;
    const c = s[0];
    for (let j = s.length - 1; j > 0; j--) {
        if (s[j] == c) {
            return s.length - 1 - j +
                minMovesToMakePalindrome(
                    s.substring(1, j) + s.substring(j + 1),
                );
        }
    }
    const mid = Math.floor(s.length / 2);
    return mid + minMovesToMakePalindrome(s.substring(1));
}
