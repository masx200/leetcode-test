import { Fraction } from "../fraction-addition-and-subtraction/Fraction.ts";
import { fractionAdd } from "../fraction-addition-and-subtraction/index.ts";

export default function fraction(cont: number[]): number[] {
    if (cont.length === 1) {
        return [cont[0], 1];
    }
    if (cont.length >= 2) {
        const last = fraction(cont.slice(-1));
        let result = new Fraction({ molecular: last[0], denominator: last[1] });
        for (let i = cont.length - 2; i >= 0; i--) {
            result = fractionAdd(
                [
                    new Fraction({ molecular: cont[i], denominator: 1 }),
                    fractionReciprocal(
                        result,
                    ),
                ],
            );
        }

        return [result.molecular, result.denominator];
    }

    return [1, 0];
}
export function fractionReciprocal(fraction: Fraction): Fraction {
    return new Fraction({
        sign: fraction.sign,
        denominator: fraction.molecular,
        molecular: fraction.denominator,
    });
}
