export default function parseBoolExpr(expression: string): boolean {
    return new Function(
        "t",
        "f",
        "not",
        "and",
        "or",
        "return " +
            expression.replace(/(\!|\&|\|)/g, (a) => {
                const value = translator.get(a);
                return value ?? a;
            }),
    )(true, false, not, and, or);
}
const translator = new Map<string, string>([
    ["!", "not"],
    ["&", "and"],
    ["|", "or"],
]);
export function not(a: boolean) {
    return !a;
}
export function and(...a: boolean[]) {
    let ans = a[0];
    for (const value of a) {
        if (!value) {
            return false;
        }
        ans = ans && value;
    }
    return ans;
}
export function or(...a: boolean[]) {
    let ans = a[0];
    for (const value of a) {
        if (value) {
            return true;
        }
        ans = ans || value;
    }
    return ans;
}
