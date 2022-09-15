export default function plusOne(digits: number[]): number[] {
    return (BigInt(digits.join("")) + 1n).toString().split("").map(Number);
}
