export default MyHashSet;
interface MyHashSet {
    add(key: number): void;
    remove(key: number): void;
    contains(key: number): boolean;
}
function MyHashSet(): MyHashSet {
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
    }

    function remove(key: number): void {
        const sub = getsub(key);
        const index = sub.findIndex((v) => v === key);
        if (index >= 0) {
            sub.splice(index, 1);
        }
    }

    function contains(key: number): boolean {
        const sub = getsub(key);
        return sub.includes(key);
    }
    return { add, remove, contains };
}
