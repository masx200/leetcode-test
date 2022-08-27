export default function preimageSizeFZF(k: number): number {
    let left = 0, right = k;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);

        const basic = calc(mid);
        if (basic == k) return 5;

        if (basic < k) left = mid + 1;
        if (basic > k) right = mid - 1;
    }
    return 0;
}

function calc(b: number) {
    return Array<number>(1 + Math.ceil(Math.log(10 ** 9) / Math.log(5))).fill(0)
        .reduce((a, _, i) => Math.floor(a + b / Math.pow(5, i)), 0);
}
