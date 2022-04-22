export default function isPowerOfThree(n: number): boolean {
    if (n === 0) return false;
    // const a= (Math.log(n)/Math.log(3))
    // return Math.abs(Math.floor(a)-a)<1e-14
    return n === Math.pow(3, Math.floor(Math.log(n) / Math.log(3)));
}
