export default function missingNumber(nums: number[]): number {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i != nums[i]) {
            return i;
        }
    }
    return len;
    // const range=(Array.from({length:nums.length+1}).map((_v,i)=>i)

    // );
    // return sum(range)-sum(nums)

    // // for(const v of nums){
    // //     // range[v-1]=undefined
    // //     if(range[v-1]){}
    // // }
    // nums.forEach(v=>{
    // range[v]=undefined
    // })

    // return range.filter(a=>typeof a!=="undefined")[0]
}
// function sum(nums: number[]): number{
//     return nums.reduce((p,v)=>p+v,0)
// }
