export default function findClosest(
    words: string[],
    word1: string,
    word2: string,
): number {
    let ans = words.length;
    let p1 = -Infinity;
    let p2 = -Infinity;
    for (const [i, word] of words.entries()) {
        if (word === word1) {
            p1 = i;
        }
        if (word === word2) {
            p2 = i;
        }
        if (p1 >= 0 && p2 >= 0) {
            ans = Math.min(ans, Math.abs(p1 - p2));
        }
    }
    return ans;
}
