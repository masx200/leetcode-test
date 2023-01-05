function storedEnergy(
    storeLimit: number,
    power: number[],
    supply: number[][]
): number {
    const { min, max } = Math;
    let sum = 0;
    let time = 0;
    for (let i = 0; i < power.length; i++) {
        while (time + 1 < supply.length && supply[time + 1][0] <= i) time++;
        if (power[i] > supply[time][2]) {
            sum = min(sum + power[i] - supply[time][2], storeLimit);
        } else if (power[i] < supply[time][1]) {
            sum = max(sum - supply[time][1] + power[i], 0);
        }
    }
    return sum;
}
export default storedEnergy;
