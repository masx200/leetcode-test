export default function observingPeriodicity(
    record: number[],
    robot: number[]
): number[] {
    const n = robot.length;
    const res: number[] = Array(n).fill(0);
    backtrack(0, record, robot, res);
    return res;
}

function backtrack(
    robotIndex: number,
    record: number[],
    robot: number[],
    res: number[]
): boolean {
    const n = robot.length;
    const m = record.length;
    if (robotIndex === n) {
        return record.every((a) => a === 0);
    }

    const maxPeriod = m - robot[robotIndex];

    loop: for (let i = 1; i <= maxPeriod; i++) {
        for (let j = robot[robotIndex]; j < m; j += i) {
            if (record[j] === 0) continue loop;
        }

        for (let j = robot[robotIndex]; j < m; j += i) {
            record[j]--;
        }
        res[robotIndex] = i;

        if (backtrack(robotIndex + 1, record, robot, res)) {
            return true;
        }
        for (let j = robot[robotIndex]; j < m; j += i) {
            record[j]++;
        }
    }
    return false;
}
