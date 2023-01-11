function evaluate(s: string, knowledge: string[][]): string {
    const map = new Map<string, string>(knowledge as [string, string][]);

    return s.replace(/\([a-z]+\)/g, (a) => map.get(a.slice(1, -1)) ?? "?");
}

export default evaluate;
