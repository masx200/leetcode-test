function addStrings(num1: string, num2: string) {
    // console.log("add",num1,num2)
    if (
        Array.prototype.every.call(num1, (s) => s === "0") &&
        Array.prototype.every.call(num2, (s) => s === "0")
    ) {
        return "0";
    }

    let i = num1.length - 1, j = num2.length - 1, add = 0;
    const ans: number[] = [];
    while (i >= 0 || j >= 0 || add != 0) {
        const x: number = i >= 0 ? Number(num1.charAt(i)) : 0;
        const y: number = j >= 0 ? Number(num2.charAt(j)) : 0;
        const result = x + y + add;
        ans.push(result % 10);
        add = Math.floor(result / 10);
        i -= 1;
        j -= 1;
    }
    return ans.reverse().join("");
}
export default addStrings;
