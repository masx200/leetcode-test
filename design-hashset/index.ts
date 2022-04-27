export default MyHashSet;
interface MyHashSet {
    add(key: number): void;
    remove(key: number): void;
    contains(key: number): boolean;
}
function MyHashSet(): MyHashSet {
    //由于我们使用整数除法作为哈希函数，为了尽可能避免冲突，应当将 \textit{base}base 取为一个质数。
    const BASE = 1009;
    type Value = Array<number>;
    const storage: Record<number, Value> = Object.create(null);

    function getsub(key: number): Value {
        const hash = key % BASE;
        const sub = storage[hash];
        if (sub) {
            return sub;
        } else {
            const res: Value = [];
            storage[hash] = res;
            return res;
        }
    }
    function add(key: number): void {
        const sub = getsub(key);
        if (sub.includes(key)) {
            return;
        } else {
            sub.push(key);
        }
        // Reflect.set(sub, key, true)
    }

    function remove(key: number): void {
        const sub = getsub(key);
        const index = sub.findIndex((v) => v === key);
        if (index >= 0) {
            sub.splice(index, 1);
        }
        // Reflect.set(sub, key, false)
    }

    function contains(key: number): boolean {
        const sub = getsub(key);
        return sub.includes(key);
        // return !!Reflect.get(sub, key,)
    }
    return { add, remove, contains };
}
// class MyHashSet {
//     constructor() {

//     }

//     add(key: number): void {

//     }

//     remove(key: number): void {

//     }

//     contains(key: number): boolean {

//     }
// }

// /**
//  * Your MyHashSet object will be instantiated and called as such:
//  * var obj = new MyHashSet()
//  * obj.add(key)
//  * obj.remove(key)
//  * var param_3 = obj.contains(key)
//  */
