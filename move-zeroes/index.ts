/**
 Do not return anything, modify nums in-place instead.
 */
export default function moveZeroes(nums: number[]): void {
    if (nums.length === 0) {
        return;
    }
    const notzeros = nums.filter((a) => a !== 0);
    // const zeros=Array(nums.length-notzeros.length).fill(0)
    nums.splice(0, notzeros.length, ...notzeros);
    for (let i = notzeros.length; i < nums.length; i++) {
        nums[i] = 0;
    }
    // nums.splice(notzeros.length,zeros.length,...zeros)
    // nums.sort((a,b)=>{
    //     return (a!==0&&b!==0)?0:(-Math.abs(a))||(Math.abs(b))
    // })
}
