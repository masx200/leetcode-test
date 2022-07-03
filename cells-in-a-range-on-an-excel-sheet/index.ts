function cellsInRange(s: string): string[] {
    const [col1, row1, , col2, row2] = s;
    const res: string[] = [];

    for (
        let col = col1;
        col <= col2;
        col = String.fromCharCode(col.charCodeAt(0) + 1)
    ) {
        for (
            let row = row1;
            row <= row2;
            row = String.fromCharCode(row.charCodeAt(0) + 1)
        ) {
            res.push(col + row);
        }
    }

    return res;
}
export default cellsInRange;
