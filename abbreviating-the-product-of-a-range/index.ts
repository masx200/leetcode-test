export default abbreviateProduct;

const factorials: bigint[] = [];
function init() {
    if (factorials.length === 0) {
        for (let i = 0; i <= 10000; i++) {
            factorials[i] = i === 0 ? 1n : BigInt(i) * factorials[i - 1];
        }
    }
}

function abbreviateProduct(left: number, right: number): string {
    init();

    const a = (left === right ? left : factorials[right] / factorials[left - 1])
        .toString();

    //@ts-ignore
    const index = Array.prototype.findLastIndex.call(a, (v) => v !== "0");

    const C = index >= 0 ? a.length - index - 1 : 0;
    const D = a.length - C;
    return (D > 10
        ? a.slice(0, 5) + "..." + a.slice(D - 5, D)
        : a.slice(0, D)) + "e" + C;
}
