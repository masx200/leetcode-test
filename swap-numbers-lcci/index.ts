export default function swapNumbers(numbers: number[]): number[] {
    [numbers[0], numbers[1]] = [numbers[1], numbers[0]];
    return numbers;
}
