export default function goodIndices(nums: number[], k: number): number[] {
    const n = nums.length;
    if (k * 2 + 1 > n) return [];

    const pre: number[] = Array(n - k * 2).fill(1);
    const post: number[] = Array(n - k * 2).fill(1);

    for (let i = 0; i < pre.length; i++) {
        if (i === 0) {
            for (let j = 1; j < k; j++) {
                // console.log('pre')
                pre[i] = nums[j] <= nums[j - 1] ? pre[i] + 1 : 1;
            }
        } else {
            const j = i + k - 1;
            // console.log(j,j-1)
            // console.log(i)
            pre[i] = nums[j] <= nums[j - 1] ? pre[i - 1] + 1 : 1;
        }
    }
    for (let i = 0; i < post.length; i++) {
        if (i === 0) {
            for (let j = n - 2; j > n - k - 1; j--) {
                // console.log('post')
                post[post.length - 1 - i] = nums[j] <= nums[j + 1]
                    ? post[post.length - 1 - i] + 1
                    : 1;
            }
        } else {
            const j = nums.length - i - k;
            //   console.log(j,j+1)
            // console.log(nums[j+1],nums[j+2],nums[j+1] <= nums[j + 2])
            //   console.log()
            // console.log(post.length - 1 - i)
            post[post.length - 1 - i] = nums[j] <= nums[j + 1]
                ? post[post.length - i] + 1
                : 1;
        }
    }
    // console.log(pre, post)

    return [...Array(n - k * 2).keys()]
        .filter((i) => pre[i] >= k && post[i] >= k)
        .map((i) => i + k);
}
