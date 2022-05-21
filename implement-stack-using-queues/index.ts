export default class MyStack {
    #queue: number[] = [];

    push(x: number): void {
        const length = this.#queue.length;
        this.#queue.push(x);
        for (let i = 0; i < length; i++) {
            const first = this.#queue.shift();
            if (typeof first == "undefined") {
                throw new Error("queue is empty");
            }
            this.#queue.push(first);
        }
    }

    pop(): number {
        const res = this.#queue.shift();
        if (typeof res == "undefined") {
            throw new Error("queue is empty");
        }
        return res;
    }

    top(): number {
        return this.#queue[0];
    }

    empty(): boolean {
        return this.#queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
