import { combinations } from "../deps.ts";
import { calculateStraightLineEquation } from "./calculateStraightLineEquation.ts";
import { uniqueStraightLineEquation } from "./uniqueStraightLineEquation.ts";

export default function maxPoints(points: number[][]): number {
    if (points.length <= 2) return points.length;
    const map = new Map<string, Set<string>>();
    let max = 0;
    for (const [point1, point2] of combinations(points, 2)) {
        const equation = calculateStraightLineEquation(point1, point2);
        const key = JSON.stringify(uniqueStraightLineEquation(...equation));
        const set = map.get(key) ?? new Set<string>();
        set.add(JSON.stringify(point1));
        set.add(JSON.stringify(point2));
        const count = set.size;
        map.set(key, set);
        max = Math.max(count, max);
    }
    // console.log(map);
    return max;
}
