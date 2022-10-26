export default function subarrayGCD(nums: number[], k: number): number {
    const n = nums.length;
    let l = 0,
        r = 0,
        f = nums[r],
        c = 0;
    while (r < n) {
        const e = gcd(f, nums[r]);
        if (e % k != 0) {
            r++;
            if (r == n) break;
            l = r;
            f = nums[r];
            continue;
        } else if (e == k) {
            let p = r,
                d = nums[r];
            while (p >= l) {
                const g = gcd(nums[p], d);
                if (g == k) {
                    c += p - l + 1;
                    break;
                }
                d = g;
                p--;
            }
        }
        f = e;
        r++;
    }
    return c;
}
export function gcd(a: number, b: number): number {
    return b != 0 ? gcd(b, a % b) : a;
}
