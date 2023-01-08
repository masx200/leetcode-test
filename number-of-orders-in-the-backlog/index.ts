function getNumberOfBacklogOrders(orders: number[][]): number {
    const MOD = 1000000007;

    const buyOrders = new Heap<[number, number]>((a, b) => b[0] - a[0]);
    const sellOrders = new Heap<[number, number]>((a, b) => a[0] - b[0]);

    for (const order of orders) {
        const [price, amount, orderType] = order;

        if (orderType == 0) {
            let count = amount;
            while (
                count > 0 &&
                !sellOrders.isEmpty() &&
                sellOrders.top()[0] <= price
            ) {
                const sellOrder = sellOrders.pop();
                const sellAmount = Math.min(count, sellOrder[1]);
                count -= sellAmount;
                sellOrder[1] -= sellAmount;
                if (sellOrder[1] > 0) {
                    sellOrders.push(sellOrder);
                }
            }
            if (count > 0) {
                buyOrders.push([price, count]);
            }
        } else {
            let count = amount;
            while (
                count > 0 &&
                !buyOrders.isEmpty() &&
                buyOrders.top()[0] >= price
            ) {
                const buyOrder = buyOrders.pop();
                const buyAmount = Math.min(count, buyOrder[1]);
                count -= buyAmount;
                buyOrder[1] -= buyAmount;
                if (buyOrder[1] > 0) {
                    buyOrders.push(buyOrder);
                }
            }
            if (count > 0) {
                sellOrders.push([price, count]);
            }
        }
    }
    let total = 0;
    for (const pq of [buyOrders, sellOrders]) {
        //@ts-ignore
        for (const order of pq.toArray()) {
            total = (total + order[1]) % MOD;
        }
    }
    return total;
}

export default getNumberOfBacklogOrders;
import { Heap } from "npm:@datastructures-js/heap@4.3.1";
