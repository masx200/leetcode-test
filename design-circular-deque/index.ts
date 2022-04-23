// deno-lint-ignore no-explicit-any
export default function MyCircularDeque<T = any>(k = Infinity) {
    // console.log('MyCircularDeque', k)
    if (k < 1) throw Error("k greater than or equal  one");
    const storage = new Map<bigint, T>();
    let min = BigInt(0);
    let max = BigInt(0);
    const initial = 0n;
    // function storage.size { return storage.size }
    function insertLast(value: T): boolean {
        if (isFull()) return false;

        if (storage.size) {
            storage.set(max + 1n, value);
            max++;
        } else {
            storage.set(initial, value);
            max = initial;
        }

        // console.log('insertLast', value, storage)
        return true;
    }

    function deleteFront(): boolean {
        if (isEmpty()) return false;
        else {
            storage.delete(min);
            min++;
            // console.log('deleteFront', storage)
            if (storage.size === 0) {
                min = initial;
            }
            return true;
        }
        // if (storage.has(min)) {
        //     // const r = storage.get(min);
        //     storage.delete(min);
        //     min++;
        //     max--
        //     console.log('deleteFront', storage)
        //     return true
        // } else { return false }

        // return r as T;
    }

    function getFront(): T | number {
        // console.log('getFront', storage)
        if (isEmpty()) return -1;
        const r = storage.get(min);
        return r as T;
    }

    function isEmpty(): boolean {
        return 0 === storage.size;
    }
    function insertFront(value: T): boolean {
        if (isFull()) return false;
        if (storage.size) {
            storage.set(min - 1n, value);
            min--;
        } else {
            storage.set(initial, value);
            min = initial;
        }
        // storage.set(min - 1n, value);
        // min--;
        // max++
        // console.log('insertFront', value, storage)
        return true;
    }
    function deleteLast(): boolean {
        if (isEmpty()) return false;
        else {
            storage.delete(max);
            max--;
            // console.log('deleteLast', storage)
            if (storage.size === 0) {
                max = initial;
            }
            return true;
        }
        // if (storage.has(max - 1n + min)) {
        //     // const r = storage.get(min);
        //     storage.delete(max - 1n + min);
        //     max--;
        //     console.log('deleteLast', storage)
        //     return true
        // } else { return false }
    }
    function getRear(): T | number {
        // console.log('getRear', storage)
        if (isEmpty()) return -1;

        const r = storage.get(max);

        return r as T;
    }
    function isFull(): boolean {
        return storage.size >= k;
    }
    return {
        isEmpty,
        getFront,
        deleteFront,
        insertLast,
        insertFront,
        deleteLast,
        getRear,
        isFull,
        length: k,
    };
}
// class MyCircularDeque {
//     constructor(k: number) {

//     }

//     insertFront(value: number): boolean {

//     }

//     insertLast(value: number): boolean {

//     }

//     deleteFront(): boolean {

//     }

//     deleteLast(): boolean {

//     }

//     getFront(): number {

//     }

//     getRear(): number {

//     }

//     isEmpty(): boolean {

//     }

//     isFull(): boolean {

//     }
// }

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
