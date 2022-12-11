export default function getNoZeroIntegers(n: number): number[] {
    const a = Math.floor(Math.random() * (n - 1) + 1);
    const b: number = n - a;
    if (String(a).indexOf("0") !== -1 || String(b).indexOf("0") !== -1) {
        return getNoZeroIntegers(n);
    }

    return [a, b];
}
