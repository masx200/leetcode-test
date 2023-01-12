import { absBigint } from "./abs_bigint.ts";

export default function fractionToDecimal(
    numerator: number,
    denominator: number,
): string {
    let a = BigInt(numerator);
    let b = BigInt(denominator);

    if (a % b === 0n) return String(a / b);

    const sb: string[] = [];
    if (a * b < 0) sb.push("-");
    a = absBigint(a);
    b = absBigint(b);
    sb.push(...(String(a / b) + "."));
    a %= b;
    const map = new Map<bigint, number>();

    while (a !== 0n) {
        map.set(a, sb.length);
        a *= 10n;
        sb.push(...String(a / b));
        a %= b;
        const u = map.get(a);
        if (typeof u === "number") {
            return sb.slice(0, u).join("") + `(${sb.slice(u).join("")})`;
        }
    }
    return sb.join("");
}
