export default function countDaysTogether(
    arriveAlice: string,
    leaveAlice: string,
    arriveBob: string,
    leaveBob: string
): number {
    const arrive = arriveAlice > arriveBob ? arriveAlice : arriveBob,
        leave = leaveAlice < leaveBob ? leaveAlice : leaveBob,
        base =
            (new Date(`2021-${leave}`).valueOf() -
                new Date(`2021-${arrive}`).valueOf()) /
                (24 * 60 * 60 * 1000) +
            1;
    return Math.max(base, 0);
}
