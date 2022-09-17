import { AvlTree } from "https://esm.sh/@datastructures-js/binary-search-tree@5.0.2/?dts";

import { traverseInOrder } from "./traverseInOrder.ts";

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
    }

    sell(
        time: number,
        customer: string,
        item: string,
        number: number,
    ): number {
        const good = this.#item2good.get(item);

        if (!good) return -1;
        if (good[1] < number) return -1;

        const tree = good[0];
        let count = 0;

        let cost = 0;
        const toberemove: {
            expires: number;
            price: number;
            count: number;
        }[] = [];

        const ac = new AbortController();
        const { signal } = ac;
        const callbacks: (() => void)[] = [];
        traverseInOrder(tree, (node) => {
            if (count >= number) return ac.abort();
            const value = node.getValue();
            if (!value) {
                return;
            }
            if (value.expires < time) {
                good[1] -= value.count;
                toberemove.push(value);
            } else {
                const diff = Math.min(number - count, value.count);
                count += diff;

                callbacks.push(() => value.count -= diff);
                cost += value.price * diff;
            }
        }, signal);

        toberemove.forEach((n) => tree.remove(n));
        if (good[1] < number || cost === 0) {
            return -1;
        }

        good[1] -= number;

        callbacks.forEach((c) => c());
        const discount = this.#customer2discount.get(customer) ?? 100;
        const result = Math.ceil(cost * discount / 100);
        this.#customer2discount.set(customer, Math.max(70, discount - 1));
        return result;
    }
}
export default VendingMachine;
