import { Fraction } from "./Fraction.ts";

export function parseFraction(expression: string): Array<Fraction> {
    return Array.from(
        expression.matchAll(
            /(?<sign>[+-]?)(?<molecular>\d+)\/(?<denominator>\d+)/g,
        ),
    ).map((a) => new Fraction(a.groups));
}
