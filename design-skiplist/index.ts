interface Skiplist {
    search: (target: number) => boolean;
    add: (num: number) => void;
    erase: (num: number) => boolean;
}

function Skiplist(): Skiplist {
    const storage = new Map<number, number>();

    function search(target: number): boolean {
        return storage.has(target) && (storage.get(target) || 0) > 0;
    }

    function add(num: number): void {
        storage.set(num, 1 + (storage.get(num) || 0));
    }

    function erase(num: number): boolean {
        if (storage.get(num) === 1) {
            storage.delete(num);

            return true;
        }
        if (search(num)) {
            storage.set(num, -1 + (storage.get(num) || 0));
            return true;
        } else {
            return false;
        }
    }
    return { search, add, erase };
}

export default Skiplist;
