import {
    MapWithExpires,
} from "https://deno.land/x/masx200_deno_caddy_cluster_reverse_proxy@3.0.3/MapWithExpires.ts";

class AuthenticationManager {
    #map = new MapWithExpires<string, { expires: number }>();
    constructor(public timeToLive: number) {}

    generate(tokenId: string, currentTime: number): void {
        // console.log('generate')
        //   console.log(this.#map)
        this.#map.set(tokenId, { expires: currentTime + this.timeToLive });
    }

    renew(tokenId: string, currentTime: number): void {
        // console.log('renew')
        //   console.log(this.#map)
        if (this.#map.has(tokenId, currentTime)) {
            // console.log(tokenId,currentTime,true)
            this.generate(tokenId, currentTime);
        } else {
            // console.log(tokenId,currentTime,false)
            return;
        }
    }

    countUnexpiredTokens(currentTime: number): number {
        // console.log('countUnexpiredTokens',currentTime)
        // console.log(this.#map)
        this.#map.clean_expires(currentTime);
        //    console.log(this.#map)
        return this.#map.size;
    }
}
export default AuthenticationManager;
