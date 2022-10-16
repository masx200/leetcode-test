export default function sumOfNumberAndReverse(num: number): boolean {
    if (num == 0) {
        return true;
    }
    const res = Math.floor(num / 2);
    for (let i = res; i < num; i++) {
        if (i + Number(String(i).split("").reverse().join("")) == num) {
            return true;
        }
    }
    return false;
}
