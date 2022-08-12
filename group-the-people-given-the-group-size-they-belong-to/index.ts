export default function groupThePeople(groupSizes: number[]): number[][] {
    const groups = new Map<number, number[]>();

    for (const [i, size] of groupSizes.entries()) {
        const arr = (groups.get(size) ?? []) as number[];

        groups.set(size, arr);

        arr.push(i);
    }

    const ans = [] as number[][];

    for (const [size, people] of groups) {
        ans.push(
            ...Array(Math.floor(people.length / size))
                .fill(0)
                .map((_, i) => people.slice(i, i + size)),
        );
    }
    return ans;
}
