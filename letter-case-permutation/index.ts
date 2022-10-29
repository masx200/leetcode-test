export default function letterCasePermutation(s: string): string[] {
    return ([...s].map((c) =>
        /\d/.test(c) ? [c] : [c.toLowerCase(), c.toUpperCase()]
    )).reduce((p, c) => p.map((v) => c.map((b) => v + b)).flat(), [""]);
}
