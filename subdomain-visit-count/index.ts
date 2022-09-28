export default function subdomainVisits(cpdomains: string[]): string[] {
    const map = new Map<string, number>();
    for (const cd of cpdomains) {
        const [c, d] = cd.split(" ");

        const n = Number(c);
        const s = d.split(".");

        for (let i = 0; i < s.length; i++) {
            const key = s.slice(i).join(".");

            map.set(key, (map.get(key) ?? 0) + n);
        }
    }
    return [...map].map(([k, v]) => `${v} ${k}`);
}
