export default class TimeMap {
    #map = new Map<string, [string, number][]>();

    set(key: string, value: string, timestamp: number): void {
        const array = this.#map.get(key) ?? [];
        array.push([value, timestamp]);
        this.#map.set(key, array);
    }

    get(key: string, timestamp: number): string {
        const pairs = this.#map.get(key);
        if (!pairs) return "";
        let left = 0;
        let right = pairs.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [valuem, timestampm] = pairs[mid];
            if (timestampm > timestamp) {
                right = mid - 1;
            } else if (timestampm < timestamp) {
                left = mid + 1;
            } else {
                return valuem;
            }
        }

        if (right >= 0) return pairs[right][0];
        return "";
    }
}
