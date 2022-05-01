interface MyHashMap {
    contains(key: number): boolean;
    put(key: number, value: number): void;

    get(key: number): number;

    remove(key: number): void;
}
function MyHashMap(): MyHashMap {
    //由于我们使用整数除法作为哈希函数，为了尽可能避免冲突，应当将 \textit{base}base 取为一个质数。
    const BASE = 1009;
    type Value = Array<[number, number]>;
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
    function put(key: number, value: number): void {
        const sub = getsub(key);
        const pair = sub.find((v) => v[0] === key);
        if (pair) {
            pair[1] = value;
            return;
        } else {
            sub.push([key, value]);
        }
        // Reflect.set(sub, key, true)
    }

    function remove(key: number): void {
        const sub = getsub(key);
        const index = sub.findIndex((v) => v[0] === key);
        if (index >= 0) {
            sub.splice(index, 1);
        }
        // Reflect.set(sub, key, false)
    }

    function contains(key: number): boolean {
        const sub = getsub(key);
        return sub.findIndex((v) => v[0] === key) >= 0;
        // return !!Reflect.get(sub, key,)
    }
    function get(key: number): number {
        //  if(!contains(key)){return -1}
        const sub = getsub(key);
        const pair = sub.find((v) => v[0] === key);
        if (pair) {
            return pair[1];
        }
        return -1;
    }
    return { put, get, remove, contains };
}
export default MyHashMap;
