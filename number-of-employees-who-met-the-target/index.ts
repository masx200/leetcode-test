function numberOfEmployeesWhoMetTarget(
    hours: number[],
    target: number,
): number {
    return hours.reduce((a, b) => a + Number(b >= target), 0);
}
export default numberOfEmployeesWhoMetTarget;
