import { assertEquals } from "../deps.ts";
import FoodRatings from "./index.ts";

Deno.test("design-a-food-rating-system", () => {
    const foodRatings = new FoodRatings(
        ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
        ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
        [9, 12, 8, 15, 14, 7],
    );
    assertEquals("kimchi", foodRatings.highestRated("korean")) // 返回 "kimchi"
    // "kimchi" 是分数最高的韩式料理，评分为 9 。
    assertEquals("ramen", foodRatings.highestRated("japanese")); // 返回 "ramen"
    // "ramen" 是分数最高的日式料理，评分为 14 。
    foodRatings.changeRating("sushi", 16); // "sushi" 现在评分变更为 16 。
    assertEquals("sushi" ,foodRatings.highestRated("japanese")); // 返回 "sushi"
    // "sushi" 是分数最高的日式料理，评分为 16 。
    foodRatings.changeRating("ramen", 16); // "ramen" 现在评分变更为 16 。
    assertEquals("ramen",  foodRatings.highestRated("japanese")); // 返回 "ramen"
    // "sushi" 和 "ramen" 的评分都是 16 。
    // 但是，"ramen" 的字典序比 "sushi" 更小。
});
