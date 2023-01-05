export default function minAreaFreeRect(points: number[][]): number {
    const ps = new Set(points.map((p) => JSON.stringify(p)));

    let ans = Infinity;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; ++k) {
                const p1 = points[i],
                    p2 = points[j],
                    p3 = points[k];
                const p4 = [p2[0] + p3[0] - p1[0], p2[1] + p3[1] - p1[1]];

                if (
                    0 ===
                    (p2[0] - p1[0]) * (p3[0] - p1[0]) +
                        (p2[1] - p1[1]) * (p3[1] - p1[1])
                ) {
                    const area =
                        Math.hypot(p2[1] - p1[1], p2[0] - p1[0]) *
                        Math.hypot(p3[1] - p1[1], p3[0] - p1[0]);
                    if (area < ans && ps.has(JSON.stringify(p4))) {
                        ans = area;
                    }
                }
            }
        }
    }
    return Number.isFinite(ans) ? ans : 0;
}
