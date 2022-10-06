export default class FileSystem {
    #map = new Map<string, number | undefined>();
    constructor() {
        this.#map.set("/", undefined);
    }
    createPath(path: string, value: number): boolean {
        if (this.#map.has(path)) return false;
        const parent = path.split("/").slice(0, -1).join("/") || "/";
        if (!this.#map.has(parent)) return false;

        const ps = path.split("/");
        for (let index = 0; index < ps.length - 1; index++) {
            const sub = ps.slice(0, index + 1).join("/") || "/";

            const node = this.#map.get(sub);
            this.#map.set(sub, node);
        }
        this.#map.set(path, value);
        return true;
    }
    get(path: string): number {
        // console.log(this);
        return this.#map.get(path) ?? -1;
    }
}
