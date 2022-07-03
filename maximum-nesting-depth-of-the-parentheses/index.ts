export default function maxDepth(s: string): number {
    let ans = 0;
    let depth = 0;
    for (const char of s) {
        if (char === "(") {
            depth++;
            ans = Math.max(depth, ans);
        } else if (char === ")") {
            depth--;
        }
    }
    return ans;
}
