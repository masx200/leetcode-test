function LRUCache(capacity: number) {
    if (capacity < 1) throw Error("capacity invalid");
    const map = new Map<number, number>();
    function get(key: number): number {
        if (map.has(key)) {
            const result = map.get(key);
            if (typeof result === "number") {
                //moveToHead
                map.delete(key);
                map.set(key, result);
                return result;
            }
        }
        return -1;
    }

    function put(key: number, value: number): void {
        if (map.has(key)) {
            //moveToHead
            map.delete(key);
            map.set(key, value);
        } else {
            //addToHead
            map.set(key, value);

            if (map.size > capacity) {
                //removeTail
                const firstkey = ((map) => {
                    for (const key of map.keys()) {
                        return key;
                    }
                    throw Error("empty map");
                })(map);

                map.delete(firstkey);
            }
        }
    }
    return { get, put };
}
type LRUCache = ReturnType<typeof LRUCache>;
export default LRUCache;

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
