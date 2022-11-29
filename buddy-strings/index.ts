function buddyStrings(A: string, B: string): boolean {
    if (A.length !== B.length || A.length + B.length <= 2) return false;
    if (A === B) {
        return A.length > new Set(A).size;
    }
    const indexArr: number[] = [];
    for (let index = 0; index < A.length; index++) {
        if (A[index] !== B[index]) {
            indexArr.push(index);
        }
    }
    if (
        indexArr.length === 2 &&
        A[indexArr[0]] === B[indexArr[1]] &&
        B[indexArr[0]] === A[indexArr[1]]
    ) {
        return true;
    }
    return false;
}
export default buddyStrings;
