export default function predictPartyVictory(senate: string): string {
    const n = senate.length;
    const radiant: number[] = [],
        dire: number[] = [];

    for (const [i, ch] of Array.from(senate).entries()) {
        if (ch === "R") {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length && dire.length) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant[0] + n);
        } else {
            dire.push(dire[0] + n);
        }
        radiant.shift();
        dire.shift();
    }
    return radiant.length ? "Radiant" : "Dire";
}
