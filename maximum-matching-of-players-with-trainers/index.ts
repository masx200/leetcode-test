export default function matchPlayersAndTrainers(
    players: number[],
    trainers: number[]
): number {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    const m = players.length,
        n = trainers.length;
    let count = 0;
    for (let i = 0, j = 0; i < m && j < n; i++, j++) {
        while (j < n && players[i] > trainers[j]) {
            j++;
        }
        if (j < n) {
            count++;
        }
    }
    return count;
}
