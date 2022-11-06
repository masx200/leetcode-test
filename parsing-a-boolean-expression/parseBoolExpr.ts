function parseBoolExpr(expression: string): boolean {
    let i = 0;
    return parseBool();
    function parseBool(): boolean {
        if (["t", "f"].includes(expression[i])) {
            return parseValue();
        }
        if (expression[i] === "!") return parseNot();
        if (expression[i] === "&") return parseAnd();
        if (expression[i] === "|") return parseOr();
        throw Error("unknown expression");
    }
    function parseValue(): boolean {
        const res = expression[i] === "t";
        i++;
        return res;
    }
    function parseNot(): boolean {
        i += 2;
        const res = parseBool();
        i++;
        return !res;
    }
    function parseAnd(): boolean {
        i++;
        const list: boolean[] = [];
        do {
            i++;
            list.push(parseBool());
        } while (expression[i] === ",");
        i++;
        return list.reduce((p, c) => p && c, true);
    }
    function parseOr(): boolean {
        i++;
        const list: boolean[] = [];
        do {
            i++;
            list.push(parseBool());
        } while (expression[i] === ",");
        i++;
        return list.reduce((p, c) => p || c, false);
    }
}
export default parseBoolExpr;
