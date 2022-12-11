export default class FrontMiddleBackQueue {
    #queue: Array<number> = [];

    pushFront(val: number): void {
        this.#queue.unshift(val);
    }

    pushMiddle(val: number): void {
        this.#queue.splice(Math.floor(this.#queue.length / 2), 0, val);
    }

    pushBack(val: number): void {
        this.#queue.push(val);
    }

    popFront(): number {
        return this.#queue.shift() ?? -1;
    }

    popMiddle(): number {
        // console.log(this)
        if (this.#queue.length === 0) return -1;
        // console.log(this.queue.length)
        const mid =
            Math.floor(this.#queue.length / 2) -
            Number(!(this.#queue.length % 2));
        // console.log(mid)
        const result = this.#queue[mid];
        // console.log(result)
        this.#queue.splice(mid, 1);
        // console.log(this)
        return result;
    }

    popBack(): number {
        return this.#queue.pop() ?? -1;
    }
}
