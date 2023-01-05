function calculateTax(brackets: number[][], income: number): number {
    let a = 0;
    for (let i = 0; i < brackets.length; i++) {
        if (income === 0) return a;
        else if (income >= brackets[i][0]) {
            if (i === 0) {
                if (brackets[i][1] === 0) a += 0;
                else a += brackets[i][0] * (brackets[i][1] / 100);
            } else {
                a += (brackets[i][0] - brackets[i - 1][0]) *
                    (brackets[i][1] / 100);
            }
        } else {
            if (brackets[i - 1]) {
                a += (income - brackets[i - 1][0]) * (brackets[i][1] / 100);
            } else a += income * (brackets[i][1] / 100);
            return a;
        }
    }
    return a;
}
export default calculateTax;
