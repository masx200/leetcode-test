export default function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map((a) => sum(a)));
}
export function sum(a: Array<number>) {
    return a.reduce((p, v) => p + v, 0);
}
