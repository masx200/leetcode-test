import { AvlTree } from "https://esm.sh/@datastructures-js/binary-search-tree@5.0.2/";

class FoodRatings {
    #cuisineToTree = new Map<string, AvlTree<string>>();
    #foodToTree = new Map<string, AvlTree<string>>();
    #foodToRating = new Map<string, number>();
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        for (const [index, food] of foods.entries()) {
            const cuisine = cuisines[index];
            const rating = ratings[index];
            this.#foodToRating.set(food, rating);
            const tree = this.#cuisineToTree.get(cuisine) ??
                new AvlTree((a, b) => {
                    const ra = this.#foodToRating.get(a) ?? 0;
                    const rb = this.#foodToRating.get(b) ?? 0;
                    return ra === rb ? a.localeCompare(b) : -ra + rb;
                });

            this.#cuisineToTree.set(cuisine, tree);
            this.#foodToTree.set(food, tree);

            tree.insert(food);
        }
    }

    changeRating(food: string, newRating: number): void {
        const tree = this.#foodToTree.get(food);
        if (!tree) throw Error("not found");

        tree.remove(food);
        this.#foodToRating.set(food, newRating);
        tree.insert(food);
    }

    highestRated(cuisine: string): string {
        return this.#cuisineToTree.get(cuisine)?.min()?.getValue() ?? "";
    }
}
export default FoodRatings;
