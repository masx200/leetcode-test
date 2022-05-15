interface Skiplist {
    search: (target: number) => boolean;
    add: (num: number) => void;
    erase: (num: number) => boolean;
}

export default Skiplist;

function Skiplist(): Skiplist {
    const storage = new Map<number, number>();

    function search(target: number): boolean {
        return (storage.get(target) || 0) > 0;
    }

    function add(num: number): void {
        storage.set(num, 1 + (storage.get(num) || 0));
    }

    function erase(num: number): boolean {
        if (search(num)) {
            storage.set(num, -1 + (storage.get(num) || 0));
            return true;
        } else {
            return false;
        }
    }
    return { search, add, erase };
}
