export function tokenize(
    expression: string,
    evalvars: string[],
    evalints: number[]
): (string | number)[] {
    const map = new Map(evalvars.map((v, i) => [v, evalints[i]]));
    return (
        expression
            .match(/\(|\)|[a-z]+|\d+|\+|\-|\*/g)
            ?.map((v) => (/\d+/g.test(v) ? Number(v) : map.get(v) ?? v)) ?? []
    );
}
