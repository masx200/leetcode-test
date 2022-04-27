export default function majorityElement(nums: number[]): number {
    const storage = new Map<number, number>();
    for (const num of nums) {
        storage.set(num, 1 + (storage.get(num) ?? 0));
    }
    const max = Math.max(...storage.values());
    // let max=0
    const res = nums[0];
    for (const [num, count] of storage) {
        if (count === max) {
            return num;
        }
        // if(count>max){
        //     res=num
        //      max=Math.max(count,max)
        // }
    }
    return res;
}
