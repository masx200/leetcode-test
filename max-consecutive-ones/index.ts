export default function findMaxConsecutiveOnes(nums: number[]): number {
    let m = 0;
    let c = 0;
    for (const v of nums) {
        c = v ? c + 1 : 0;
        m = Math.max(m, c);
    }
    return m;
    // return nums.reduce(([c,m],v)=>{

    //     c=v?c+1:0
    //     m=Math.max(m,c)
    //     return [c,m]
    // },[0,0])[1]
}
