export default function reachNumber(target: number): number {
    let sum = 0;
    let n = 0;
    target = Math.abs(target);
    while (sum < target || (target + sum) % 2 !== 0) {
        n++;
        sum += n;
    }
    return n;
}
