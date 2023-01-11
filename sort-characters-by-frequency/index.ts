export default function frequencySort(s: string): string {
    const storage = new Map<string, number>();
    for (const w of s) {
        storage.set(w, 1 + (storage.get(w) ?? 0));
    }
    const sb: string[] = [];
    for (const [c, frequency] of [...storage.entries()].sort((a, b) => {
        return +b[1] - a[1];
    })) {
        for (let j = 0; j < frequency; j++) {
            sb.push(c);
        }
    }
    return sb.join("");
}
