import { sum } from "./sum.ts";

export default function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map((a) => sum(a)));
}
