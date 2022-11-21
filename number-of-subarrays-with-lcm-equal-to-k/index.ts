export default function subarrayLCM(nums: number[], k: number): number {
    let cnt = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (k % nums[i]) continue;
        let lcm_num = nums[i];
        for (let j = i; j < len; j++) {
            if (k % nums[j]) break;
            lcm_num = lcm(lcm_num, nums[j]);

            if (lcm_num === k) cnt += 1;
        }
    }

    return cnt;
}

function gcd<T extends number | bigint>(a: T, b: T): T {
    if (b == 0) return a;
    return gcd(b, (a % b) as T) as T;
}

function lcm<T extends number | bigint>(a: T, b: T): T {
    return ((a * b) / gcd(a, b)) as T;
}
export { gcd, lcm };
