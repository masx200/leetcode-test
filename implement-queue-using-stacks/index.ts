// deno-lint-ignore no-explicit-any
export default function MyQueue<T = any>() {
    const storage = new Map<bigint, T>();
    let left = BigInt(0);
    let right = BigInt(0);
    function push(x: T): void {
        storage.set(right, x);
        right++;
    }

    function pop(): T {
        const r = storage.get(left);
        storage.delete(left);
        left++;
        return r as T;
    }

    function peek(): T {
        const r = storage.get(left);
        return r as T;
    }

    function empty(): boolean {
        return left === right;
    }
    return { empty, peek, pop, push };
}

// class MyQueue<T = any> {
//     #storage = new Map<bigint, T>()
//     #left = BigInt(0)
//     #right = BigInt(0)
//     constructor() {

//     }

//     push(x: T): void {
//         this.#storage.set(this.#right, x)
//         this.#right++
//     }

//     pop(): T {
//         const r = this.#storage.get(this.#left)
//         this.#storage.delete(this.#left)
//         this.#left++
//         return r as T
//     }

//     peek(): T {
//         const r = this.#storage.get(this.#left)
//         return r as T
//     }

//     empty(): boolean {
//         return this.#left === this.#right
//     }
// }

// /**
//  * Your MyQueue object will be instantiated and called as such:
//  * var obj = new MyQueue()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.peek()
//  * var param_4 = obj.empty()
//  */
