function powerfulIntegers(x: number, y: number, bound: number): number[] {
    if (bound < 2) return [];

    if (bound == 2) return [2];

    const res: number[] = [];
    for (let i = 0; i <= (x == 1 ? 0 : Math.log(bound) / Math.log(x)); i++) {
        for (
            let j = 0;
            j <= (y == 1 ? 0 : Math.log(bound) / Math.log(y));
            j++
        ) {
            const num = x ** i + y ** j;
            if (num <= bound) {
                res.push(num);
            }
        }
    }
    return [...new Set(res)];
}
export default powerfulIntegers;
