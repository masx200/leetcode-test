export default function removeStones(stones: [number, number][]): number {
    const parent_row = new Map<number, Set<[row: number, col: number]>>();
    const parent_col = new Map<number, Set<[row: number, col: number]>>();

    function merge(
        ar: [row: number, col: number],
        rp: Set<[row: number, col: number]>
    ) {
        parent_row.set(ar[0], rp);

        parent_col.set(ar[1], rp);
        rp.add(ar);
    }

    for (const stone of stones) {
        const [row, col] = stone;

        const rp = parent_row.get(row);
        const cp = parent_col.get(col);

        if (((parent_row.has(row) || parent_col.has(col)) && rp) || cp) {
            if (rp === cp && cp && rp) {
                merge(stone, rp);
            } else {
                combine(stone, rp, cp);
            }
        } else {
            create(stone, row, col);
        }
    }

    function create(stone: [number, number], row: number, col: number) {
        const set = new Set([stone]);
        parent_row.set(row, set);

        parent_col.set(col, set);
    }
    function combine(
        stone: [number, number],
        rp: Set<[row: number, col: number]> | undefined,
        cp: Set<[row: number, col: number]> | undefined
    ) {
        const series: Set<[row: number, col: number]> = rp || cp || new Set();

        cp?.forEach((s) => series.add(s));
        rp?.forEach((s) => series.add(s));
        merge(stone, series);

        series.forEach(([row, col]) => {
            parent_col.set(col, series);
            parent_row.set(row, series);
        });
    }
    return (
        stones.length -
        new Set([...parent_col.values(), ...parent_row.values()]).size
    );
}
