declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

Array.prototype.snail = function (
    rowsCount: number,
    colsCount: number,
): number[][] {
    // deno-lint-ignore no-this-alias
    const nums = this;
    if (
        rowsCount * colsCount !== this.length
    ) return [];
    return Array.from(
        { length: rowsCount },
        (_, i) =>
            Array.from(
                { length: colsCount },
                (_, j) =>
                    j & 1
                        ? nums[rowsCount - 1 - i + rowsCount * j]
                        : nums[i + rowsCount * j],
            ),
    );
};
