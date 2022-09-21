export default function largestGoodInteger(num: string): string {
    return num.match(/([0-9])\1\1/g)?.sort((a, b) => b.localeCompare(a))?.[0] ??
        "";
}
