export default function areNumbersAscending(s: string): boolean {
    return (s.match(/\d+/g) ?? [])
        .map(Number)
        .every((v, i, a) => i === 0 || v > a[i - 1]);
}
