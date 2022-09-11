export default function canJump(nums: number[]): boolean {
    if (nums.length === 1) return true; //长度为1 直接就是终点
    let cover = nums[0]; //能覆盖的最远距离
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i]); //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
        if (cover >= nums.length - 1) {
            //覆盖距离超过或等于nums.length - 1 说明能到达终点
            return true;
        }
    }
    return false; //循环完成之后 还没返回true 就是不能达到终点
}
