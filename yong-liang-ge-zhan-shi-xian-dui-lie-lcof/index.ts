// deno-lint-ignore no-explicit-any
export default function CQueue<T = any>() {
    const inStack: Array<T> = [];
    const outStack: Array<T> = [];
    function deleteHead(): T | number {
        if (!outStack.length) {
            if (!inStack.length) {
                return -1;
            }
            in2out();
        }
        return outStack.pop() as T;
    }
    function appendTail(value: T): void {
        inStack.push(value);
        // const x = value
        // this.#storage.set(this.#right, x)
        // this.#right++
    }
    function in2out() {
        while (inStack.length) {
            outStack.push(inStack.pop() as T);
        }
    }
    return { appendTail, deleteHead };
}

// class CQueue<T = any>{
//     #in2out: () => void
//     // #storage = new Map<bigint, T>()
//     // #left = BigInt(0)
//     // #right = BigInt(0)
//     #inStack: Array<T>
//     #outStack: Array<T>
//     constructor() {
//         this.#inStack = [];
//         this.#outStack = [];
//         this.#in2out = () => {
//             while (this.#inStack.length) {
//                 this.#outStack.push(this.#inStack.pop() as T);
//             }
//         }
//     }

//     appendTail(value: T): void {
//         this.#inStack.push(value);
//         // const x = value
//         // this.#storage.set(this.#right, x)
//         // this.#right++
//     }

//     deleteHead(): T | number {
//         if (!this.#outStack.length) {
//             if (!this.#inStack.length) {
//                 return -1;
//             }
//             this.#in2out();
//         }
//         return this.#outStack.pop() as T;
//         // if (this.#left === this.#right) { return -1 }
//         // const r = this.#storage.get(this.#left)

//         // this.#storage.delete(this.#left)
//         // this.#left++
//         // return r as T

//     }
// }

// /**
//  * Your CQueue object will be instantiated and called as such:
//  * var obj = new CQueue()
//  * obj.appendTail(value)
//  * var param_2 = obj.deleteHead()
//  */
