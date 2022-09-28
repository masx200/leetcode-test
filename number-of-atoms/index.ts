export default function countOfAtoms(formula: string): string {
    const f = formula.match(/\(|\)|\d+|[A-Z][a-z]*/g) ?? [];

    const total = new Map<string, number>();

    const stack = [1];

    let num = 1;

    for (let i = f.length - 1; i >= 0; i--) {
        const a = f[i];
        if (/\d+/g.test(a)) {
            num = Number(a);
        } else {
            const mul = Number(stack.at(-1));

            if (a === ")") {
                stack.push(mul * num);
            } else if (a === "(") {
                stack.pop();
            } else {
                total.set(a, (total.get(a) ?? 0) + mul * num);
            }
            num = 1;
        }
    }

    return [...total]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map((a) => a[0] + (a[1] > 1 ? String(a[1]) : ""))
        .join("");
}
