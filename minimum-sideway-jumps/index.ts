function minSideJumps(obstacles: number[]): number {
  const n = obstacles.length
  let ans = 0
  let cur = 2 // 记录青蛙当前所在的跑道
  for (let i = 0; i < n; i++) {
    if (obstacles[i + 1] !== cur) continue
    // 记录另外两条跑道
    const other = (cur + 1) % 3 || 3
    const another = (cur + 2) % 3 || 3

    // 求另两个跑道，下一个障碍物的位置
    let next = i
    while (next < n && obstacles[next] !== other) {
      next++
    }
    while (i < n && obstacles[i] !== another) {
      i++
    }
    cur = next > i ? other : another
    i = Math.max(next, i) - 2
    ans++
  }
  return ans
}
export default minSideJumps
