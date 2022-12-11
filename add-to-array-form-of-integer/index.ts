function addToArrayForm(A: number[], K: number): number[] {
    const res = [];

    let i = A.length - 1,
        carry = 0;

    while (i >= 0 || K != 0) {
        const x = i >= 0 ? A[i] : 0;

        const y = K != 0 ? K % 10 : 0;

        const sum = x + y + carry;

        res.push(sum % 10);

        carry = Math.floor(sum / 10);

        i--;

        K = Math.floor(K / 10);
    }
    if (carry) {
        res.push(carry);
    }
    return res.reverse();
}
export default addToArrayForm;
