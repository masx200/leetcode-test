export default function closestToTarget(arr: number[], target: number): number {
    const temp: number[] = [];

    for (const n of arr) {
        if (temp.length) {
            const last = temp[temp.length - 1];
            if (last !== n) {
                temp.push(n);
            }
        } else {
            temp.push(n);
        }
    }

    arr = temp;

    let ans = Math.abs(arr[0] - target);

    let valid = Array.of(arr[0]);

    for (const num of arr) {
        const tv = new Set([num, ...valid.map((x) => x & num)]);
        valid = Array.from(tv);

        ans = Math.min(ans, ...valid.map((x) => Math.abs(x - target)));
    }
    return ans;
}
