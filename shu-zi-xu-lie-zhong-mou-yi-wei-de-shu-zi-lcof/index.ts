function findNthDigit(n: number): number {
    if (n < 10) {
        return n;
    }
    if (!data.length) {
        init();
    }

    const selected = data.find((v) => v.prev <= n && v.total > n);
    // console.log(selected)
    if (!selected) throw Error("accident not found");
    const offset = n - selected.prev;
    const current = selected.start + Math.floor(offset / selected.part);
    // console.log(current)
    return Number(String(current)[offset % selected.part]);
}
const data: Array<{
    prev: number;
    total: number;
    part: number;
    start: number;
    end: number;
}> = [];
function init() {
    let prev = 0;
    let total = 10;
    let part = 1;
    let start = 0;

    let end = 10;
    while (total <= (2 ** 31 - 1) * 10) {
        data.push({ prev, total: total, part: part, start, end });

        part++;
        start = end;
        end *= 10;
        prev = total;
        total += part * (end - start);
    }
    // console.log(data)
}

export default findNthDigit;
