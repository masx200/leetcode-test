export function encode(longUrl: string): string {
    if (longtoshort.has(longUrl)) {
        return longtoshort.get(longUrl) || "";
    }
    longtoshort.set(longUrl, String(count));
    shorttolong.set(String(count), longUrl);

    return String(count++);
}

export function decode(shortUrl: string): string {
    return shorttolong.get(shortUrl) || "";
}
let count = 0;
const longtoshort = new Map<string, string>();
const shorttolong = new Map<string, string>();
