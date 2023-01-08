export default function titleToNumber(columnTitle: string): number {
    return columnTitle.length === 1
        ? columnTitle.charCodeAt(0) - "A".charCodeAt(0) + 1
        : titleToNumber(columnTitle.at(-1) ?? "") +
              26 * titleToNumber(columnTitle.slice(0, -1));
}
