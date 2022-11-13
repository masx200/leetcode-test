export default function subarrayLCM(nums: number[], k: number): number {
    let cnt = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (k % nums[i]) continue;
        let lcm = nums[i];
        for (let j = i; j < len; j++) {
            if (k % nums[j]) break;
            lcm = getLCM(lcm, nums[j]);

            if (lcm === k) cnt += 1;
        }
    }

    return cnt;
}

function getGCD<T extends number | bigint>(a: T, b: T): T {
    if (b == 0) return a;
    return getGCD(b, (a % b) as T) as T;
}

function getLCM<T extends number | bigint>(a: T, b: T): T {
    return ((a * b) / getGCD(a, b)) as T;
}
export { getGCD, getLCM };
