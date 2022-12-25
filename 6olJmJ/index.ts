import { lowerBound } from "../checking-existence-of-edge-length-limited-paths-ii/lowerBound.ts";
function explorationSupply(station: number[], pos: number[]): number[] {
    const { abs } = Math;
    const n = pos.length,
        m = station.length;
    const ans = Array<number>(n).fill(0);

    for (let i = 0; i < n; i++) {
        const ix = lowerBound(0, station.length, (m) => station[m] - pos[i]);

        if (ix == m) ans[i] = m - 1;
        else if (station[ix] == pos[i]) ans[i] = ix;
        else if (ix == 0) ans[i] = 0;
        else {
            if (abs(station[ix] - pos[i]) >= abs(pos[i] - station[ix - 1])) {
                ans[i] = ix - 1;
            } else ans[i] = ix;
        }
    }
    return ans;
}
export default explorationSupply;
