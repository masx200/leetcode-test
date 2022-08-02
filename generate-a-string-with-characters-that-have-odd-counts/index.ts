export default function generateTheString(n: number): string {
    if (n % 2 === 1) {
        return "a".repeat(n);
    }
    return "a".repeat(n - 1) + "b";
}
