export default function dailyTemperatures(temperatures: number[]): number[] {
    const ans = temperatures.map(() => 0);
    const stack: number[] = [];

    for (const [index, temper] of temperatures.entries()) {
        let last: number | undefined;
        while (
            stack.length &&
            "number" === typeof (last = stack.at(-1)) &&
            temper > temperatures[last]
        ) {
            ans[last] = index - last;
            stack.pop();
        }
        stack.push(index);
    }
    return ans;
}
