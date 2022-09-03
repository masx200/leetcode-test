export default function findLongestChain(pairs: number[][]): number {
    let curr = -Infinity, res = 0;
    pairs.sort((a, b) => a[1] - b[1]);
    for (const p of pairs) {
        if (curr < p[0]) {
            curr = p[1];
            res++;
        }
    }
    return res;
}
