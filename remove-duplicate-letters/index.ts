function smallestSubsequence(s: string): string {
    const ans: string[] = [" "];
    const d: Set<string> = new Set();
    Array.prototype.forEach.call(s, (c, i) => {
        if (!d.has(c)) {
            const t = s.slice(i);
            for (
                let a = ans[ans.length - 1];
                a > c && t.indexOf(a) + 1;
                a = ans[ans.length - 1]
            ) {
                const temp = ans[ans.length - 1];
                d.delete(temp);
                ans.pop();
            }
            ans.push(c);
            d.add(c);
        }
    });
    return ans.slice(1).join("");
}
export default smallestSubsequence;
