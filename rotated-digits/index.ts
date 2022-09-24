export default function rotatedDigits(n: number): number {
    if (typeof cache[n] !== "undefined") return cache[n];

    for (let i = 1; i <= 10000; i++) {
        cache[i] = cache[i - 1] + Number(isrotatedDigit(i));
    }

    return cache[n] ?? 0;
}
function isrotatedDigit(n: number) {
    const map: Record<string | number, number> = {
        0: 0,
        1: 1,
        8: 8,
        2: 5,
        5: 2,
        6: 9,
        9: 6,
    };
    const str = n.toString();
    return (
        ![3, 4, 7].some((d) => str.includes(d.toString())) &&
        [...str].map((d) => map[d]).join("") !== str
    );
}
const cache: number[] = [0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4];
