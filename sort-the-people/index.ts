export default function sortPeople(
    names: string[],
    heights: number[],
): string[] {
    return [...names.entries()].sort((a, b) =>
        -(heights[a[0]] ?? 0) + (heights[b[0]] ?? 0)
    ).map((a) => a[1]);
}
