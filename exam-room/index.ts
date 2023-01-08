class ExamRoom {
    #n: number;

    constructor(n: number) {
        this.#n = n;
    }
    #seats = new AvlTree<number>((a, b) => a - b);

    #pq = new Heap<[number, number]>((a, b) => {
        const d1 = a[1] - a[0],
            d2 = b[1] - b[0];
        const x = Math.floor(d1 / 2);
        const y = Math.floor(d2 / 2);
        return x < y || (x == y && a[0] > b[0]) ? 1 : -1;
    });
    seat(): number {
        const n = this.#n;
        if (this.#seats.count() === 0) {
            this.#seats.insert(0);
            return 0;
        }
        const left = this.#seats.min()?.getValue() ?? 0,
            right = this.#n - 1 - (this.#seats.max()?.getValue() ?? 0);
        const seats = this.#seats;
        const pq = this.#pq;
        while (seats.count() >= 2) {
            const p = pq.top();
            if (
                seats.has(p[0]) &&
                seats.has(p[1]) &&
                seats.upperBound(p[0], false)?.getValue() == p[1]
            ) {
                // 不属于延迟删除的区间
                const d = p[1] - p[0];
                if (Math.floor(d / 2) < right || Math.floor(d / 2) <= left) {
                    // 最左或最右的座位更优
                    break;
                }
                pq.pop();
                pq.push([p[0], p[0] + Math.floor(d / 2)]);
                pq.push([p[0] + Math.floor(d / 2), p[1]]);
                seats.insert(p[0] + Math.floor(d / 2));
                return Math.floor(p[0] + d / 2);
            }
            pq.pop(); // leave 函数中延迟删除的区间在此时删除
        }
        if (right > left) {
            // 最右的位置更优
            pq.push([seats.max()?.getValue() ?? 0, n - 1]);
            seats.insert(n - 1);
            return n - 1;
        } else {
            pq.push([0, seats.min()?.getValue() ?? 0]);
            seats.insert(0);
            return 0;
        }
    }

    leave(p: number): void {
        const seats = this.#seats;
        const pq = this.#pq;
        if (
            p != (seats.min()?.getValue() ?? 0) &&
            (p != seats.max()?.getValue() ?? 0)
        ) {
            const prev = seats.lowerBound(p, false)?.getValue() ?? 0,
                next = seats.upperBound(p, false)?.getValue() ?? 0;
            pq.push([prev, next]);
        }
        seats.remove(p);
    }
}
export default ExamRoom;
import { AvlTree } from "npm:@datastructures-js/binary-search-tree@5.2.0";
import { Heap } from "npm:@datastructures-js/heap@4.3.1";
