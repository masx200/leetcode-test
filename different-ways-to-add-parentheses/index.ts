export default function diffWaysToCompute(expression: string): number[] {
    if (/^\d+$/g.test(expression)) {
        return [Number(expression)];
    }
    const regexp = /(?<operator>[\+\-\*])|(?<digit>\d+)/g;
    const groups = Array.from(expression.matchAll(regexp)).map(
        (a) => a.groups,
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
    output: (num: number) => void,
) {
    if (groups.length === 1) {
        output(Number(groups[0].digit));
        return;
    }
    if (groups.length === 3) {
        const [a, b, c] = groups;
        if (b.operator === "+") {
            output(Number(a.digit) + Number(c.digit));
            return;
        }
        if (b.operator === "-") {
            output(Number(a.digit) - Number(c.digit));
            return;
        }
        if (b.operator === "*") {
            output(Number(a.digit) * Number(c.digit));
            return;
        }
        return;
    }
    const [first, second, third, ...rest] = groups;
    diffWaysCalc(
        [first, second, third],
        (num: number) => diffWaysCalc([{ digit: num }, ...rest], output),
    );
    diffWaysCalc(
        [third, ...rest],
        (num: number) => diffWaysCalc([first, second, { digit: num }], output),
    );
}
