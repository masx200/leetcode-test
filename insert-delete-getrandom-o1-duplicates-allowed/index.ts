export default RandomizedCollection;
type RandomizedCollection = ReturnType<typeof RandomizedCollection>;
function RandomizedCollection() {
    const value_to_index = new Map<number, Set<number>>();
    const nums: number[] = [];
    return {
        insert(val: number): boolean {
            // if (value_to_index.has(val)) return false;
            const index = nums.length;
            nums.push(val);
            const set = value_to_index.get(val) ?? new Set();
            set.add(index);
            value_to_index.set(val, set);
            return set.size === 1;
        },
        remove(val: number): boolean {
            if (!value_to_index.has(val)) return false;
            const index = value_to_index.get(val);
            if (typeof index === "undefined") {
                throw Error("accident");
            }
            const first = index.keys().next().value;
            index.delete(first);
            const last = nums.at(-1);
            if (typeof last === "undefined") {
                throw Error("accident");
            }
            value_to_index.get(last)?.delete(nums.length - 1);
            nums[first] = last;
            // value_to_index.set(last, index);
            if (first < nums.length - 1) {
                value_to_index.get(last)?.add(first);
            }

            nums.pop();
            if (index.size === 0) {
                value_to_index.delete(val);
            }
            return true;
        },
        getRandom(): number {
            return nums[Math.floor(Math.random() * nums.length)];
        },
    };
}
