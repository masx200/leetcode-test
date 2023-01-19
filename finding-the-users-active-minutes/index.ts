function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    const activeMinutes = new Map<number, Set<number>>();
    for (const [id, time] of logs) {
        if (!activeMinutes.has(id)) {
            activeMinutes.set(id, new Set());
        }
        activeMinutes.get(id)?.add(time);
    }
    const answer: number[] = new Array(k).fill(0);
    for (const minutes of activeMinutes.values()) {
        const activeCount = minutes.size;
        answer[activeCount - 1]++;
    }
    return answer;
}
export default findingUsersActiveMinutes;
