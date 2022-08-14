export default class CustomStack {
    #stack = Array<[number, number]>();
    constructor(public capacity: number) {}

    push(x: number): void {
        if (this.#stack.length >= this.capacity) {
            return;
        }
        this.#stack.push([x, 0]);
    }

    pop(): number {
        if (this.#stack.length === 0) return -1;
        const last = this.#stack[this.#stack.length - 1];
        this.#stack.pop();
        if (this.#stack.length) {
            this.increment(this.#stack.length, last[1]);
        }
        return last[0] + last[1];
    }

    increment(k: number, val: number): void {
        if (this.#stack.length === 0) return;
        // console.log(this,k,val)
        if (this.#stack.length < k) {
            k = this.#stack.length;
        }
        //   console.log(this,k,val)
        this.#stack[k - 1][1] += val;
    }
}
