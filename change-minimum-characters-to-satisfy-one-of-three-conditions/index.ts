export default function minCharacters(a: string, b: string): number {
    const fA: number[] = new Array(26).fill(0);
    const fB: number[] = new Array(26).fill(0);
    const fC: number[] = new Array(26).fill(0);
    for (let i = 0; i < a.length; ++i) fA[a[i].charCodeAt(0) - 97]++;
    for (let i = 0; i < b.length; ++i) fB[b[i].charCodeAt(0) - 97]++;
    const c = a + b;
    for (let i = 0; i < c.length; ++i) fC[c[i].charCodeAt(0) - 97]++;
    let ans = fC.reduce((a, b) => a + b, 0) - Math.max(...fC);
    for (let i = 1; i < 26; ++i) {
        ans = Math.min(
            ans,
            fA.slice(0, i).reduce((a, b) => a + b, 0) +
                fB.slice(i).reduce((a, b) => a + b, 0)
        );
        ans = Math.min(
            ans,
            fB.slice(0, i).reduce((a, b) => a + b, 0) +
                fA.slice(i).reduce((a, b) => a + b, 0)
        );
    }
    return ans;
}
