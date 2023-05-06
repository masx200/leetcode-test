function largestRectangleArea(heights: number[]): number {
    heights.push(0);
    const length: number = heights.length;
    // 栈底->栈顶：严格单调递增
    const stack: number[] = [];
    stack.push(0);
    let resMax: number = 0;
    for (let i = 1; i < length; i++) {
        let top = stack[stack.length - 1];
        if (heights[top] < heights[i]) {
            stack.push(i);
        } else if (heights[top] === heights[i]) {
            stack.pop();
            stack.push(i);
        } else {
            while (stack.length > 0 && heights[top] > heights[i]) {
                const mid = stack.pop() as number;
                const left = stack.length > 0 ? stack[stack.length - 1] : -1;
                const w = i - left - 1;
                const h = heights[mid];
                resMax = Math.max(resMax, w * h);
                top = stack[stack.length - 1];
            }
            stack.push(i);
        }
    }
    return resMax;
}
export default largestRectangleArea;
