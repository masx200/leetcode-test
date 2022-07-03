export default function nextGreaterElement(n: number): number {
    let cnt = 1;
    let x = n;
    while (x >= 10 && Math.floor(x / 10) % 10 >= x % 10) {
        cnt++;
        x = Math.floor(x / 10);
    }
    x = Math.floor(x / 10);

    if (x === 0) {
        return -1;
    }
    const target = x % 10;
    let x2 = n;
    let cnt2 = 0;
    while (x2 % 10 <= target) {
        x2 = Math.floor(x2 / 10);
        cnt2++;
    }
    x += (x2 % 10) - target;

    const MAX_INT = 2 ** 31 - 1;
    for (let i = 0; i < cnt; i++, n = Math.floor(n / 10)) {
        const d = i !== cnt2 ? n % 10 : target;
        if (x > MAX_INT / 10 || (x === Math.floor(MAX_INT / 10) && d > 7)) {
            return -1;
        }
        x = x * 10 + d;
    }
    return x;
}
