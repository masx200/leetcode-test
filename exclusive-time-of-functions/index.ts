export default function exclusiveTime(n: number, logs: string[]): number[] {
    const ans: number[] = Array(n).fill(0);
    const stack: [number, number][] = [];
    const data = logs.map((log) => {
        const [q, w, e] = log.split(":");
        return [
            Number(q),
            Number(w === "start"),
            Number(e) + Number(w !== "start"),
        ];
    });
    //console.log(data)
    for (const [a, b, c] of data) {
        if (stack.length) {
            const last = stack[stack.length - 1];

            if (b) {
                ans[last[0]] += c - last[1];
                stack.push([a, c]);
            } else {
                ans[a] += c - last[1];

                stack.pop();
                if (stack.length) {
                    stack[stack.length - 1][1] = c;
                }
            }
        } else {
            if (b) {
                stack.push([a, c]);
            } else {
                throw new Error("first end");
            }
        }
        // console.log(stack)
    }
    if (stack.length) {
        throw Error("not end");
    }
    return ans;
}
