export default function isRobotBounded(instructions: string): boolean {
    const distance: number[] = Array(4).fill(0); // 朝四个方向行走的距离
    let direct = 0; // 当前朝向
    for (const i of instructions) {
        if (i == "L") {
            direct = (direct - 1 + 4) % 4;
            continue;
        }
        if (i == "R") {
            direct = (direct + 1) % 4;
            continue;
        }
        distance[direct]++;
    }
    // 面朝北方且不在原点
    return !(direct == 0 &&
        (distance[0] != distance[2] || distance[1] != distance[3]));
}
