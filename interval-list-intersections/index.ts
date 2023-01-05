export default function intervalIntersection(
    firstList: number[][],
    secondList: number[][],
): number[][] {
    const events: [number, number][] = [];
    for (let i = 0; i < firstList.length; i++) {
        events.push([firstList[i][0], 1]);
        events.push([firstList[i][1], 0]);
    }
    for (let i = 0; i < secondList.length; i++) {
        events.push([secondList[i][0], 1]);
        events.push([secondList[i][1], 0]);
    }
    events.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
    let height = 0;
    const ans: number[][] = [];
    let range: number[] = [];
    for (let i = 0; i < events.length; i++) {
        const [pos, type] = events[i];
        if (type === 1) {
            //出现
            height++;
            if (height === 2) range[0] = pos;
        } else {
            //消失
            height--;
            if (height === 1) {
                range[1] = pos;
                ans.push(range);
                range = [];
            }
        }
    }
    return ans;
}
