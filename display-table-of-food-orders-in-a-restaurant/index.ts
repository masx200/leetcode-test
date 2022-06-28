export default function displayTable(orders: string[][]): string[][] {
    const foods = new Set<string>();
    const tables_to_food_counter = new Map<string, Map<string, number>>();

    orders.forEach(function (order) {
        const counter = tables_to_food_counter.get(order[1]) ?? new Map();
        tables_to_food_counter.set(order[1], counter);

        counter.set(order[2], (counter.get(order[2]) ?? 0) + 1);
        return foods.add(order[2]);
    });
    const foodsArr = Array.from(foods);
    foodsArr.sort();
    const table = [["Table", ...foodsArr]];
    tables_to_food_counter.forEach(function (counter, table_id) {
        const table_row = [table_id];
        foodsArr.forEach(function (food) {
            table_row.push(String(counter.get(food) ?? 0));
        });
        table.push(table_row);
    });

    table.sort((a, b) => {
        if (a[0] === "Table") {
            return -1;
        }
        if (b[0] === "Table") {
            return 1;
        }
        if (Number(a[0]) < Number(b[0])) return -1;
        if (Number(a[0]) > Number(b[0])) return 1;
        return 0;
    });
    return table;
}
