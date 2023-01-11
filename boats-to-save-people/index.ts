export default function numRescueBoats(
    people: number[],
    limit: number
): number {
    let l = 0,
        r = people.length - 1;
    let ans = 0;
    people.sort((a, b) => a - b);
    while (l <= r) {
        if (l == r) {
            ++ans;
            break;
        } else if (people[l] + people[r] > limit) {
            ++ans, r--;
        } else ++ans, ++l, --r;
    }
    return ans;
}
