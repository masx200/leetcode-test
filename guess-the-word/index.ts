import { Master } from "./Master.ts";

function findSecretWord(wordlist: string[], master: Master) {
    const N = wordlist.length;
    const H: number[][] = new Array(N).fill(0).map(() => Array(N).fill(0));
    for (let i = 0; i < N; ++i) {
        for (let j = i; j < N; ++j) {
            const match = getMatch(wordlist[i], wordlist[j]);

            H[i][j] = H[j][i] = match;
        }
    }
    let possible = [...wordlist.keys()];
    const seen = new Set<number>();
    while (possible.length) {
        const ansguesses: number[] = solve(possible, H);
        const j = ansguesses[Math.floor(Math.random() * ansguesses.length)];

        seen.add(j);
        const d = master.guess(wordlist[j]);
        if (d === 6) return;
        if (d >= 0) {
            possible = possible.filter((i) => !seen.has(i) && d === H[i][j]);
        } else {
            return;
        }
    }
}

function solve(possible: number[], H: number[][]) {
    const ansgrps: [number, number][] = [];
    for (const i of possible) {
        const groups: Array<number> = Array(7).fill(0);
        for (const j of possible) {
            if (j !== i) {
                groups[H[i][j]]++;
            }
        }
        const maxgroup = groups.reduce((a, v) => (a > v ? a : v));
        ansgrps.push([maxgroup, i]);
    }
    const minlen = Math.min(...ansgrps.map((a) => a[0]));

    const ansguesses: number[] = ansgrps
        .filter((a) => a[0] === minlen)
        .map((a) => a[1]);
    return ansguesses;
}

function getMatch(v: string, w: string) {
    return Array.prototype.filter.call(v, (c, k) => w[k] === c).length;
}

export default findSecretWord;
