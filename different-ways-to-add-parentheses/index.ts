export default function diffWaysToCompute(expression: string): number[] {
    if (/^\d+$/g.test(expression)) {
        return [Number(expression)];
    }
    const regexp = /(?<operator>[\+\-\*])|(?<digit>\d+)/g;
    const groups = Array.from(expression.matchAll(regexp)).map(
        (a) => a.groups
    ) as unknown as (
        | {
              digit: string;
              operator?: undefined;
          }
        | {
              digit?: undefined;
              operator: string;
          }
    )[];
    const ans: number[] = diffWaysCalc(groups);
    return ans;
}
function diffWaysCalc(
    groups: (
        | {
              digit: number | string;
              operator?: undefined;
          }
        | {
              digit?: undefined;
              operator: string;
          }
    )[]
): number[] {
    if (groups.length === 1) {
        return [Number(groups[0].digit)];
    }
    if (groups.length === 3) {
        return [calc_three(groups)];
    }

    const ans: number[] = [];
    for (let i = 1; i < groups.length; i += 2) {
        const operator = groups[i];
        const left = diffWaysCalc(groups.slice(0, i));
        const right = diffWaysCalc(groups.slice(i + 1));

        left.map((a) =>
            right.map((b) => calc_three([{ digit: a }, operator, { digit: b }]))
        ).forEach((a) => ans.push(...a));
    }
    return ans;
}
function calc_three(
    groups: (
        | {
              digit: number | string;
              operator?: undefined;
          }
        | {
              digit?: undefined;
              operator: string;
          }
    )[]
): number {
    if (groups.length === 3) {
        const [a, b, c] = groups;
        if (b.operator === "+") {
            return Number(a.digit) + Number(c.digit);
        }
        if (b.operator === "-") {
            return Number(a.digit) - Number(c.digit);
        }
        if (b.operator === "*") {
            return Number(a.digit) * Number(c.digit);
        }
    }
    throw Error("groups length not three or operator not +,-,*");
}
