import { sum } from "../richest-customer-wealth/sum.ts";

export default function maxRotateFunction(nums: number[]): number {
    const numSum = sum(nums);
    const n = nums.length;
    // let f=sum(nums.map((v,i)=>v*i))
    let f = 0;
    for (let i = 0; i < n; i++) {
        f += i * nums[i];
    }

    let res = f;

    // return nums.reduceRight(([f,res],v)=>{

    // f+=numSum-n*v
    // res=Math.max(res,f)
    // return [f,res]
    // },[f,res])[1]
    for (let i = n - 1; i > 0; i--) {
        f += numSum - n * nums[i];
        res = Math.max(res, f);
    }
    return res;
}
// function sum(a: Array<number>) {
//     // return a.reduce((p, v) => p + v, 0);
//     let r=0
//     for(const v of a){
//         r+=v
//     }
//     return r
// }
