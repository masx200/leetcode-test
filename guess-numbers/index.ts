export default function game(guess: number[], answer: number[]): number {
    return guess
        .map((n, i) => n === answer[i])
        .reduce((a, v) => a + Number(v), 0);
}
