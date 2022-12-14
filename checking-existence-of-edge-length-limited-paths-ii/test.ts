import DistanceLimitedPathsExist from "./index.ts";
import { assertEquals } from "asserts";

Deno.test("1724.Checking-Existence-of-Edge-Length-Limited-Paths-II", () => {
    const res: any[] = [];
    const distanceLimitedPathsExist = new DistanceLimitedPathsExist(6, [
        [0, 2, 4],
        [0, 3, 2],
        [1, 2, 3],
        [2, 3, 1],
        [4, 5, 5],
    ]);
    res.push(null);
    res.push(distanceLimitedPathsExist.query(2, 3, 2)); // return true. There is an edge from 2 to 3 of distance 1, which is less than 2.
    res.push(distanceLimitedPathsExist.query(1, 3, 3)); // return false. There is no way to go from 1 to 3 with distances strictly less than 3.
    res.push(distanceLimitedPathsExist.query(2, 0, 3)); // return true. There is a way to go from 2 to 0 with distance < 3: travel from 2 to 3 to 0.
    res.push(distanceLimitedPathsExist.query(0, 5, 6));

    assertEquals(res, [null, true, false, true, false]);
});
