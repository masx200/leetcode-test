export default class MyCalendar {
    #booked: [number, number][] = [];
    book(start: number, end: number): boolean {
        const booked = this.#booked;
        if (booked.length) {
            let left = 0;
            let right = booked.length;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);

                const [s, e] = booked[mid];
                if (start >= e) {
                    left = mid + 1;
                } else if (end <= s) {
                    right = mid;
                } else {
                    return false;
                }
            }

            booked.splice(left, 0, [start, end]);
            return true;
        } else {
            booked.push([start, end]);
            return true;
        }
    }
}
