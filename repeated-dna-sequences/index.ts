function findRepeatedDnaSequences(s: string): string[] {
    const L = 10;
    const ans: string[] = [];
    const cnt: Map<string, number> = new Map();
    const n = s.length;
    for (let i = 0; i <= n - L; ++i) {
        const sub = s.slice(i, i + L);
        cnt.set(sub, (cnt.get(sub) || 0) + 1);
        if (cnt.get(sub) === 2) {
            ans.push(sub);
        }
    }
    return ans;
}
export default findRepeatedDnaSequences;
