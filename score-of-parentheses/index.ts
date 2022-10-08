function scoreOfParentheses(s: string): number {
    //@ts-ignore
    return (
        dfs(
            JSON.parse(
                `[${s}]`
                    .replaceAll(")(", "],[")
                    .replaceAll("(", "[")
                    .replaceAll(")", "]"),
            ),
        ) / 2
    );
}
function dfs(a: any[]): number {
    return 0 === a.length ? 1 : 2 * a.reduce((e, r) => e + dfs(r), 0);
}
export default scoreOfParentheses;
