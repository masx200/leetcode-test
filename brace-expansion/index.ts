export default function expand(s: string): string[] {
    if (s.includes("{")) {
        const m = parse(s);

        if (typeof m === "string") return [m];
        return evaluate(m).sort();
    } else {
        return [s];
    }
}
export type Expression = AddExpression | MultExpression;

export interface AddExpression {
    type: "AddExpression";
    children: (Expression | string)[];
}
export interface MultExpression {
    type: "MultExpression";
    children: (Expression | string)[];
}

export function parse(s: string): Expression | string {
    const m = s.match(/\,|\{|\}|[a-z]+/g) ?? [];
    if (!m || !m.length) return { type: "AddExpression", children: [] };

    let i = 0;

    function dfs(): Expression | string {
        const a: (string | Expression)[] = [];

        while (i < m.length) {
            const value = m[i];
            if (value === "{") {
                i++;
                a.push(dfs());
            } else if (value === "}") {
                i++;
                break;
            } else {
                a.push(value);
                i++;
            }
        }

        if (a.length == 1) {
            return a[0];
        }
        return a.includes(",")
            ? splitAdd(a)
            : { type: "MultExpression", children: a };
    }
    const r = dfs();
    return r;
}

function splitAdd(a: (string | Expression)[]): Expression | string {
    const e: AddExpression = { type: "AddExpression", children: [] };
    if (a.length === 1) return a[0];
    const index = a.indexOf(",");
    if (index < 0) return { type: "MultExpression", children: a };

    if (index === 1) {
        e.children.push(a[0]);
    } else {
        e.children.push({
            type: "MultExpression",
            children: a.slice(0, index),
        });
    }
    e.children.push(splitAdd(a.slice(index + 1)));
    if (e.children.length == 1) {
        return e.children[0];
    }
    return e;
}
export function evaluate(m: Expression | string): string[] {
    if (typeof m === "string") return [m];

    if (m.type === "MultExpression") {
        return m.children.reduce((p: string[], c): string[] => {
            const left = p;
            const right = typeof c === "string" ? [c] : evaluate(c);
            if (p.length === 0) return right;
            return left.map((v) => right.map((r) => v + r)).flat();
        }, [] as string[]);
    } else {
        return m.children.map(evaluate).flat();
    }
}
