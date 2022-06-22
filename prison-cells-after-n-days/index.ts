export default function prisonAfterNDays(cells: number[], n: number): number[] {
    if (n === 0) return cells;
    const sets: Set<number> = new Set<number>(),
        results: number[][] = [];
    let key: number,
        times: number = n; //, i: number = 0;
    while (times-- > 0) {
        cells = transform(cells);
        key = state_unique_key(cells);
        if (sets.has(key)) {
            // console.log(results)
            return results[times % results.length];
        }
        sets.add(key);
        results.push(cells);
    }
    return cells;
}

function transform(cells: number[]) {
    return cells.map((_value, index) => {
        if (index === 0 || index === cells.length - 1) {
            return 0;
        }

        return Number(cells[index + 1] === cells[index - 1]);
    });
}
function state_unique_key(cells: number[]): number {
    return Number("0b" + cells.join(""));
}
