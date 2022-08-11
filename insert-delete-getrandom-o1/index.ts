function RandomizedSet() {
    const value_to_index = new Map<number, number>();
    const nums: number[] = [];
    return {
        insert(val: number): boolean {
            if (value_to_index.has(val)) return false;
            const index = nums.length;
            nums.push(val);
            value_to_index.set(val, index);
            return true;
        },
        remove(val: number): boolean {
            if (!value_to_index.has(val)) return false;
            const index = value_to_index.get(val);
            if (typeof index === "undefined") {
                throw Error("accident");
            }
            const last = nums.at(-1);
            if (typeof last === "undefined") {
                throw Error("accident");
            }
            nums[index] = last;
            value_to_index.set(last, index);
            nums.pop();
            value_to_index.delete(val);
            return true;
        },
        getRandom(): number {
            return nums[Math.floor(Math.random() * nums.length)];
        },
    };
}

type RandomizedSet = ReturnType<typeof RandomizedSet>;
export default RandomizedSet;
