export default function findRestaurant(
    list1: string[],
    list2: string[],
): string[] {
    const RestaurantToIndex1 = new Map(
        Array.from(list1.entries()).map(([index, restaurant]) => [
            restaurant,
            index,
        ]),
    );
    const RestaurantToIndex2 = new Map(
        Array.from(list2.entries()).map(([index, restaurant]) => [
            restaurant,
            index,
        ]),
    );
    const commonRestaurants = list1.filter((restaurant) =>
        RestaurantToIndex2.has(restaurant)
    );
    const RestaurantsCommonToIndexSum = commonRestaurants.map(
        (restaurant) =>
            [
                restaurant,
                (RestaurantToIndex1.get(restaurant) ?? 0) +
                (RestaurantToIndex2.get(restaurant) ?? 0),
            ] as const,
    );

    const minimumIndexSum = Math.min(
        ...RestaurantsCommonToIndexSum.map((a) => a[1]),
    );
    return RestaurantsCommonToIndexSum.filter(
        (a) => a[1] === minimumIndexSum,
    ).map((a) => a[0]);
}
