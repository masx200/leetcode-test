export default function brokenCalc(startValue: number, target: number): number {
    if (target <= startValue) return startValue - target;
    if (target % 2 == 0) return 1 + brokenCalc(startValue, target / 2);
    else return 1 + brokenCalc(startValue, target + 1);
}
