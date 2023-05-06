function minNumberOfFrogs(croakOfFrogs: string): number {
    let c: number,
        r: number,
        o: number,
        a: number,
        k: number,
        now: number,
        res: number;
    const { max } = Math;
    c =
        r =
        o =
        a =
        k =
            0;
    now = 0;
    res = 0;
    for (const i of croakOfFrogs) {
        if (i == "c") {
            c += 1;
            now += 1;
            res = max(res, now);
        } else if (i == "r") r += 1;
        else if (i == "a") a += 1;
        else if (i == "o") o += 1;
        else if (i == "k") {
            k += 1;
            now -= 1;
        }
        if (!(c >= r && r >= o && o >= a && a >= k)) {
            return -1;
        }
    }

    return now == 0 ? res : -1;
}
export default minNumberOfFrogs;
