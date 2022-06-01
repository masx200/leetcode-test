export default function findWinners(matches: number[][]): number[][] {
    const gamertolosecount = new Map<number, number>();

    for (const [winner, loser] of matches) {
        gamertolosecount.set(winner, gamertolosecount.get(winner) ?? 0);
        gamertolosecount.set(loser, (gamertolosecount.get(loser) ?? 0) + 1);
    }
    const gamerslosezero: number[] = [];
    const gamersloseone: number[] = [];

    for (const [gamer, losecount] of gamertolosecount) {
        if (losecount === 0) {
            gamerslosezero.push(gamer);
        }
        if (losecount === 1) {
            gamersloseone.push(gamer);
        }
    }
    return [
        gamerslosezero.sort((a, b) => a - b),
        gamersloseone.sort((a, b) => a - b),
    ];
}
