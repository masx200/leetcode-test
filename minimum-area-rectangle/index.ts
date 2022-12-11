export default function minAreaRect(points: number[][]): number {
    const ps = new Set(points.map((p) => JSON.stringify(p)));

    let ans = Infinity;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (
                points[i][0] !== points[j][0] &&
                points[i][1] !== points[j][1]
            ) {
                const area =
                    Math.abs(points[j][0] - points[i][0]) *
                    Math.abs(points[j][1] - points[i][1]);
                if (area > ans) continue;
                if (
                    ps.has(JSON.stringify([points[i][0], points[j][1]])) &&
                    ps.has(JSON.stringify([points[j][0], points[i][1]]))
                ) {
                    ans = Math.min(ans, area);
                }
            }
        }
    }
    return Number.isFinite(ans) ? ans : 0;
}
