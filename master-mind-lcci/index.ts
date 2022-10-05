export default function masterMind(solution: string, guess: string): number[] {
    let m = 0;
    let n = 0;
    const obj: Record<any, number> = {
        R: 0,
        G: 0,
        B: 0,
        Y: 0,
    };
    for (let i = 0; i < solution.length; i++) {
        const s = solution[i];
        const g = guess[i];
        if (s === g) {
            m++;
        } else {
            if (obj[s]++ < 0) n++;
            if (obj[g]-- > 0) n++;
        }
    }
    return [m, n];
}
