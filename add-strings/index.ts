export default function addStrings(num1: string, num2: string) {
    const result: number[] = [];
    let carry = 0;
    for (let i = 0; i < Math.max(num2.length, num1.length); i++) {
        // console.log(i, num1[i], num2[i], carry);
        const r = carry +
            Number(getIntegerReverse(num1, i)) +
            Number(getIntegerReverse(num2, i));
        result.push(r % 10);
        carry = Math.floor(r / 10);
    }
    if (carry) result.push(carry);
    return result.reverse().join("");
}

function getIntegerReverse(s: string, i: number) {
    if (i < 0) {
        throw Error("out of bounds");
    }
    if (i < s.length) {
        return Number(s.slice(-1 - i)[0]);
    } else {
        return 0;
    }
}
