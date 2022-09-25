export default function countRoutes(
    locations: number[],
    start: number,
    finish: number,
    fuel: number,
): number {
    const MOD = 1000000007;

    const n = locations.length;
    const startPos = locations[start];
    const finishPos = locations[finish];

    locations.sort((a, b) => a - b);
    for (let i = 0; i < n; ++i) {
        if (startPos == locations[i]) {
            start = i;
        }
        if (finishPos == locations[i]) {
            finish = i;
        }
    }

    const dpL = Array(n)
        .fill(0)
        .map(() => Array<number>(fuel + 1).fill(0));
    const dpR = Array(n)
        .fill(0)
        .map(() => Array<number>(fuel + 1).fill(0));

    dpL[start][0] = dpR[start][0] = 1;

    for (let used = 0; used <= fuel; ++used) {
        for (let city = n - 2; city >= 0; --city) {
            const delta = locations[city + 1] - locations[city];
            if (used >= delta) {
                dpL[city][used] =
                    ((((used == delta ? 0 : dpL[city + 1][used - delta]) * 2) %
                        MOD) +
                        dpR[city + 1][used - delta]) %
                    MOD;
            }
        }
        for (let city = 1; city < n; ++city) {
            const delta = locations[city] - locations[city - 1];
            if (used >= delta) {
                dpR[city][used] =
                    ((((used == delta ? 0 : dpR[city - 1][used - delta]) * 2) %
                        MOD) +
                        dpL[city - 1][used - delta]) %
                    MOD;
            }
        }
    }

    let ans = 0;
    for (let used = 0; used <= fuel; ++used) {
        ans += (dpL[finish][used] + dpR[finish][used]) % MOD;
        ans %= MOD;
    }
    if (start == finish) {
        ans = (ans + MOD - 1) % MOD;
    }
    return ans;
}
