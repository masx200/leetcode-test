export default function countMatches(
    items: string[][],
    ruleKey: string,
    ruleValue: string,
): number {
    return items.filter(
        ([t, c, n]) =>
            (ruleKey === "type" && t == ruleValue) ||
            (ruleKey === "color" && c == ruleValue) ||
            (ruleKey === "name" && n == ruleValue),
    ).length;
}
