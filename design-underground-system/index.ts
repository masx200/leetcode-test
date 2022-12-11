export default class UndergroundSystem {
    #id2info = new Map<number, [string, number]>();
    #station2time = new Map<string, number[]>();
    constructor() {}

    checkIn(id: number, stationName: string, t: number): void {
        const info: [string, number] = [stationName, t];
        this.#id2info.set(id, info);
    }

    checkOut(id: number, stationName: string, t: number): void {
        const info = this.#id2info.get(id);
        if (info) {
            const key = JSON.stringify([info[0], stationName]);
            const time = this.#station2time.get(key) ?? [];
            time.push(t - info[1]);
            this.#station2time.set(key, time);
        } else {
            throw Error("accident");
        }
    }

    getAverageTime(startStation: string, endStation: string): number {
        const key = JSON.stringify([startStation, endStation]);
        const time = this.#station2time.get(key);
        if (!time) throw Error("accident");

        return time.reduce((a, v) => a + v, 0) / time.length;
    }
}
