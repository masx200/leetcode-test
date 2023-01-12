import { gcd } from "../max-points-on-a-line/greatest_common_divisor.ts";
import { deduplication } from "./deduplication.ts";
import { Fraction, FractionToString } from "./Fraction.ts";
import { parseFraction } from "./parseFraction.ts";

export function fractionAdd(fractions: Fraction[]): Fraction {
    const denominator = deduplication(
        fractions.map((f) => f.denominator),
    ).reduce((a, b) => a * b);
    const molecular = fractions
        .map((f) => (f.sign * f.molecular * denominator) / f.denominator)
        .reduce((a, b) => a + b);

    return new Fraction({
        denominator: denominator,
        molecular: molecular,
    });
}
export function simplifyFraction(fraction: Fraction) {
    const { molecular, denominator } = fraction;
    const g = gcd(molecular, denominator);
    return new Fraction({
        sign: fraction.sign,
        denominator: fraction.denominator / g,
        molecular: fraction.molecular / g,
    });
}
function fractionAddition(expression: string): string {
    const fractions = parseFraction(expression);

    return FractionToString(simplifyFraction(fractionAdd(fractions)));
}
export default fractionAddition;
