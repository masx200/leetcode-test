function minMaxGame(nums: number[]): number {

    

    while (nums.length !== 1) {

        

    const n = nums.length;

        const newNums:  number[]= new Array(Math.floor(n / 2)).fill(0).map((_,i)=>i % 2 === 0?Math.min(nums[2 * i], nums[2 * i + 1]):Math.max(nums[2 * i], nums[2 * i + 1]));

        

        nums = newNums;

        

    }

    return nums[0];

}
export default minMaxGame
