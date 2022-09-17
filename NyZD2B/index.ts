class VendingMachine {
    #customer2discount = new Map<string, number>();
    #item2good = new Map<
        string,
        [AvlTree<{ expires: number; price: number; count: number }>, number]
    >();

    constructor() {}

    addItem(
        time: number,
        number: number,
        item: string,
        price: number,
        duration: number,
    ): void {
        const good = this.#item2good.get(item) ??
            [
                new AvlTree((a, b) =>
                    a.price !== b.price
                        ? a.price - b.price
                        : a.expires - b.expires
                ),
                0,
            ];
        good[1] += number;
        this.#item2good.set(item, good);
        good[0].insert({ expires: time + duration, price, count: number });
        // console.log(good);
    }

    sell(
        time: number,
        customer: string,
        item: string,
        number: number,
    ): number {
        const good = this.#item2good.get(item);
        // console.log(good);
        if (!good) return -1;
        if (good[1] < number) return -1;
        let min: {
            expires: number;
            price: number;
            count: number;
        } | undefined;
        const tree = good[0];
        let count = 0;
        const nodes: {
            expires: number;
            price: number;
            count: number;
        }[] = [];
        let cost = 0;
        const olds: typeof nodes = [];
        while (tree.count() && count < number) {
            min = tree.min()?.getValue();
            if (!min) break;
            tree.remove(min);
            if (min.expires < time) {
                good[1] -= min.count;
            } else {
                const diff = Math.min(number - count, min.count);
                count += diff;
                // console.log(count, diff);
                nodes.push({ ...min, count: min.count - diff });
                olds.push(min);
                cost += min.price * diff;
            }
        }
        if (good[1] < number || cost === 0) {
            olds.forEach((n) => n.count > 0 && tree.insert(n));
            return -1;
        }

        nodes.forEach((n) => n.count > 0 && tree.insert(n));
        good[1] -= number;
        // console.log(good);

        const discount = this.#customer2discount.get(customer) ?? 100;
        const result = Math.ceil(cost * discount / 100);
        this.#customer2discount.set(customer, Math.max(70, discount - 1));
        return result;
    }
}
export default VendingMachine;
import { AvlTree } from "https://esm.sh/@datastructures-js/binary-search-tree@5.0.2/?dts";
