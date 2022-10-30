export default function magicalString(n: number): number {
    if (cache.length === 0) {
        cache.push(1, 2, 2);
        let c = 2;
        while (cache.length <= 1e5) {
            const ch = c % 2 === 0 ? 1 : 2;
            if (cache[c] === 1) cache.push(ch);
            else cache.push(ch, ch);
            c += 1;
        }
    }

    let c = 0;
    for (let i = 0; i < n; i++) {
        if (cache[i] === 1) c += 1;
    }
    return c;
}
const cache: number[] = [];
