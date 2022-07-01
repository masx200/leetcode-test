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
    const ans: number[] = [];
    const output = (num: number) => {
        ans.push(num);
    };
    diffWaysCalc(groups, output);
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
    )[],
    output: (num: number) => void
) {
    if (groups.length === 1) {
        output(Number(groups[0].digit));
        return;
    }
    if (groups.length === 3) {
        return output(calc_three(groups));
    }
    if (groups.length === 5) {
        const [first, second, third, ...rest] = groups;
        diffWaysCalc([first, second, third], (num: number) =>
            diffWaysCalc([{ digit: num }, ...rest], output)
        );
        diffWaysCalc([third, ...rest], (num: number) =>
            diffWaysCalc([first, second, { digit: num }], output)
        );
    }
    for (let i = 0; i + 2 < groups.length; i += 2) {
        const result_three = calc_three(groups.slice(i, i + 3));
        diffWaysCalc(
            [
                ...groups.slice(0, i),
                { digit: result_three },
                ...groups.slice(i + 3),
            ],
            output
        );
    }
    return;
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
