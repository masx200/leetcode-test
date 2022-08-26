export default  function shuffle(nums: number[], n: number): number[] {
return Array<number>(n*2).fill(0).map((_,i)=>nums[Math.floor(i/2)+n*(i%2)])
}
