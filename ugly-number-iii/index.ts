export default function nthUglyNumber(
    n: number,
    a: number,
    b: number,
    c: number,
): number {
    return Number(nthUglyBigInt(BigInt(n), BigInt(a), BigInt(b), BigInt(c)));
}
export function nthUglyBigInt(
    n: bigint,
    a: bigint,
    b: bigint,
    c: bigint,
): bigint {
    // 先将数值转换为 BigInt 类型
    (a = BigInt(a)), (b = BigInt(b)), (c = BigInt(c)), (n = BigInt(n));

    // BigInt 不能使用 Math 函数判断，所以自己写一个
    // 求最小公倍数

    // 检查是否是丑数
    function check(val: bigint) {
        return val % a === 0n || val % b === 0n || val % c === 0n;
    }

    let r = n * min(a, b, c);
    let l = 0n;
    const a_b = lcm(a, b);
    const a_c = lcm(a, c);
    const b_c = lcm(b, c);
    const a_b_c = lcm(a_b, c);

    // 二分查找丑数
    while (l < r) {
        const mid = l + (r - l) / 2n;
        const count = mid / a +
            mid / b +
            mid / c -
            mid / a_b -
            mid / b_c -
            mid / a_c +
            mid / a_b_c;

        if (count === n) {
            // 当 count 等于 n 时还需要再判断是否为丑数，因为对于BigInt的除法来说， 4 / 2 和 5 / 2 的结果是相等的
            if (check(mid)) {
                return mid;
            } else {
                r = mid - 1n;
            }
        }
        if (count < n) {
            l = mid + 1n;
        } else {
            r = mid - 1n;
        }
    }

    return check(l) ? l : -1n;
} // 求最大公约数
export function lcm(a: bigint, b: bigint) {
    return (a * b) / gcd(a, b);
}
export function min(a: bigint, b: bigint, c: bigint) {
    let m = a;
    if (m > b) {
        m = b;
    }
    if (m > c) {
        m = c;
    }

    return m;
}
export function gcd(a: bigint, b: bigint): bigint {
    if (b === 0n) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
