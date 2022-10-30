import { runScript } from 'leetcode-class';

import { assertEquals } from '../deps.ts';
import FoodRatings from './index.ts';

Deno.test("design-a-food-rating-system", () => {
    const foodRatings = new FoodRatings(
        ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
        ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
        [9, 12, 8, 15, 14, 7],
    );
    assertEquals("kimchi", foodRatings.highestRated("korean")); // 返回 "kimchi"
    // "kimchi" 是分数最高的韩式料理，评分为 9 。
    assertEquals("ramen", foodRatings.highestRated("japanese")); // 返回 "ramen"
    // "ramen" 是分数最高的日式料理，评分为 14 。
    foodRatings.changeRating("sushi", 16); // "sushi" 现在评分变更为 16 。
    assertEquals("sushi", foodRatings.highestRated("japanese")); // 返回 "sushi"
    // "sushi" 是分数最高的日式料理，评分为 16 。
    foodRatings.changeRating("ramen", 16); // "ramen" 现在评分变更为 16 。
    assertEquals("ramen", foodRatings.highestRated("japanese")); // 返回 "ramen"
    // "sushi" 和 "ramen" 的评分都是 16 。
    // 但是，"ramen" 的字典序比 "sushi" 更小。
});
Deno.test("design-a-food-rating-system", () => {
    const c = [
        "FoodRatings",
        "changeRating",
        "changeRating",
        "changeRating",
        "highestRated",
    ];
    const i = [
        [["shjnfxk", "dmqitcmuc", "jeegkoabpu", "ammxyb", "vjxqrvfnxv"], [
            "yrfziuszqu",
            "yrfziuszqu",
            "yrfziuszqu",
            "yrfziuszqu",
            "yrfziuszqu",
        ], [12, 19, 13, 12, 1]],
        ["ammxyb", 17],
        ["dmqitcmuc", 9],
        ["vjxqrvfnxv", 4],
        ["yrfziuszqu"],
    ];
    const o = [null, null, null, null, "ammxyb"];
    assertEquals(runScript(c, i, [FoodRatings]), o);
});
Deno.test("design-a-food-rating-system", () => {
    const e: any[][] = [[[
        "FoodRatings",
        "highestRated",
        "highestRated",
        "changeRating",
        "highestRated",
        "changeRating",
        "highestRated",
    ], [
        [["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], [
            "korean",
            "japanese",
            "japanese",
            "greek",
            "japanese",
            "korean",
        ], [9, 12, 8, 15, 14, 7]],
        ["korean"],
        ["japanese"],
        ["sushi", 16],
        ["japanese"],
        ["ramen", 16],
        ["japanese"],
    ]], [
        [
            "FoodRatings",
            "changeRating",
            "highestRated",
            "changeRating",
            "changeRating",
            "highestRated",
        ],
        [
            [["czopaaeyl", "lxoozsbh", "kbaxapl"], [
                "dmnuqeatj",
                "dmnuqeatj",
                "dmnuqeatj",
            ], [11, 2, 15]],
            ["czopaaeyl", 12],
            ["dmnuqeatj"],
            ["kbaxapl", 8],
            ["lxoozsbh", 5],
            ["dmnuqeatj"],
        ],
    ]];
    const o = [[null, "kimchi", "ramen", null, "sushi", null, "ramen"], [
        null,
        null,
        "kbaxapl",
        null,
        null,
        "czopaaeyl",
    ]];
    assertEquals(e.map((v) => runScript(v[0], v[1], [FoodRatings])), o);
});
