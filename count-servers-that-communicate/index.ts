export default function countServers(grid: number[][]): number {
    const computers: Array<[number, number]> = [];

    const count_m: Array<number> = [];
    const count_n: Array<number> = [];

    grid.forEach(function (a, i) {
        return a.forEach((v, j) => {
            if (v === 1) {
                computers.push([i, j]);
                count_m[i] = 1 + (count_m[i] ?? 0);
                count_n[j] = 1 + (count_n[j] ?? 0);
            }
        });
    });

    return computers.filter(([i, j]) => {
        return count_m[i] >= 2 || count_n[j] >= 2;
    }).length;
}
