function maxChunksToSorted(arr: number[]): number {
    const stack = [] as number[];
    for (const val of arr) {
        if (!stack.length || stack[stack.length - 1] <= val) {
            stack.push(val);
        } else {
            const temp = stack[stack.length - 1];
            stack.pop();
            while (stack[stack.length - 1] > val) {
                stack.pop();
            }
            stack.push(temp);
        }
    }
    return stack.length;
}
export default maxChunksToSorted;
