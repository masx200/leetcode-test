export default function isNumber(s: string): boolean {
    if (["+Infinity", "Infinity", "-Infinity"].includes(s)) return false;
    const num = Number(s);
    return !Number.isNaN(num);
}
