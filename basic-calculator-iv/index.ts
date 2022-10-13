import { tokenize } from "./tokenize.ts";

export default function basicCalculatorIV(
    expression: string,
    evalvars: string[],
    evalints: number[]
): string[] {
    const tokens = tokenize(expression, evalvars, evalints);
}
