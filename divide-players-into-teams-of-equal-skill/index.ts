function dividePlayers(skill: number[]): number {
    skill.sort((a, b) => a - b);
    const sum = skill[0] + skill[skill.length - 1];
    let ans = 0;
    for (let i = 0; i < skill.length / 2; i++) {
        if (sum !== skill[i] + skill[skill.length - 1 - i]) {
            return -1;
        }

        ans += skill[i] * skill[skill.length - 1 - i];
    }
    return ans;
}
export default dividePlayers;
