export default function parseTernary(expression: string): string {
    if (expression.match(/.\?.\:./)) {
        const result = parseTernaryReverse(reverse(expression));

        return reverse(result);
    }
    return expression;
}
function parseTernaryReverse(expression: string): string {
    if (expression.match(/.\:.\?./)) {
        return parseTernaryReverse(
            expression.replace(/.\:.\?./, (s) => {
                const matched = s.match(/(?<c>.)\:(?<b>.)\?(?<a>.)/);
                if (matched) {
                    const { a, b, c } = matched.groups ?? {};
                    return a === "T" ? b : c;
                }
                return s;
            }),
        );
    }
    return expression;
}

function reverse(s: string) {
    return s.split("").reverse().join("");
}
