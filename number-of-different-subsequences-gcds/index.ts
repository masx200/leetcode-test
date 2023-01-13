import { max } from "../deps.ts";

function countDifferentSubsequenceGCDs(nums: number[]): number {
    const maxVal = max(nums) as number;
    const occured = new Array<boolean>(maxVal + 1).fill(false);
    for (const num of nums) {
        occured[num] = true;
    }
    let ans = 0;
    for (let i = 1; i <= maxVal; i++) {
        let subGcd = 0;
        for (let j = i; j <= maxVal; j += i) {
            if (occured[j]) {
                if (subGcd === 0) {
                    subGcd = j;
                } else {
                    subGcd = gcd(subGcd, j);
                }
                if (subGcd === i) {
                    ans++;
                    break;
                }
            }
        }
    }
    return ans;
}
export function gcd(num1: number, num2: number) {
    while (num2 !== 0) {
        const temp = num1;
        num1 = num2;
        num2 = temp % num2;
    }
    return num1;
}
export default countDifferentSubsequenceGCDs;
