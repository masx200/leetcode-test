export default function findTheWinner(n: number, k: number): number {
    let winner = 1;
    for (let i = 2; i <= n; i++) {
        winner = (k + winner - 1) % i + 1;
    }
    return winner;
}
