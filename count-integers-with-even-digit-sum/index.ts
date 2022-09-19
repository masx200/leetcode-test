export default function countEven(num: number): number {
    return [...num.toString()].map(Number).reduce((a, v) => a + v, 0) % 2
        ? Math.floor((num - 1) / 2)
        : Math.floor((num) / 2);
}
