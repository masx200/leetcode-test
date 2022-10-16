export default function countTime(time: string): number {
    let hour = 1,
        minute = 1;
    const digit = time;

    if (digit[0] == "?" && digit[1] == "?") hour = 24;
    else if (digit[0] == "?") hour = digit[1] <= "3" ? 3 : 2;
    else if (digit[1] == "?") hour = digit[0] <= "1" ? 10 : 4;

    if (digit[3] == "?" && digit[4] == "?") minute = 60;
    else if (digit[3] == "?") minute = 6;
    else if (digit[4] == "?") minute = 10;

    return hour * minute;
}
