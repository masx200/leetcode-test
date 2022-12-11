export default function diStringMatch(s: string): number[] {
    const n = s.length,
        ans = new Array<number>();
    let left = 0,
        right = n;
    for (let i = 0; i < n; i++) {
        if (s.charCodeAt(i) === "I".charCodeAt(0)) {
            ans.push(left++);
        } else {
            ans.push(right--);
        }
    }
    ans.push(left);
    return ans;
}
