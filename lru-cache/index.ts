function LRUCache(capacity: number): {
    get: (key: number) => number;
    put: (key: number, value: number) => void;
} {
    if (capacity < 1) throw Error("capacity invalid");
    const map = new Map<number, number>();
    function get(key: number): number {
        if (map.has(key)) {
            const result = map.get(key);
            if (typeof result === "number") {
                map.delete(key);
                map.set(key, result);
                return result;
            }
        }
        return -1;
    }

    function put(key: number, value: number): void {
        if (map.has(key)) {
            map.delete(key);
            map.set(key, value);
        } else {
            map.set(key, value);

            if (map.size > capacity) {
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
