export default function carFleet(
    target: number,
    position: number[],
    speed: number[],
): number {
    const n = position.length;
    const cars = position.map((v, i) => [v, (target - v) / speed[i]]);

    cars.sort((a, b) => a[0] - b[0]);

    let ans = 0,
        t = n;
    while (--t > 0) {
        if (cars[t][1] < cars[t - 1][1]) ans++;
        else {
            cars[t - 1] = cars[t];
        }
    }
    return ans + Number(t == 0);
}
