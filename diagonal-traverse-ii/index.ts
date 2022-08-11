export default function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length;
    if (m === 0) return [];
    const n = mat[0].length;
    if (n === 0) return [];
    const entries: Array<[number, number, number]> = [];

    mat.forEach((a, i) => {
        a.forEach((v, j) => {
            entries.push([i, j, v]);
        });
    });
    // console.log(entries)
    entries.sort((a, b) => {
        const sum1 = a[0] + a[1];
        const sum2 = b[0] + b[1];
        if (sum1 !== sum2) return sum1 - sum2;
        // if (sum1 % 2) {
        //     return -b[0] + a[0];
        // } else {
        return -a[0] + b[0];
        // }
    });
    //   console.log(entries)
    const ans: number[] = entries.map((a) => a[2]);

    return ans;
}
