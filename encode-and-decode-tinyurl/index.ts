/**
 * Encodes a URL to a shortened URL.
 */
export function encode(longUrl: string): string {
    if (longtoshort.has(longUrl)) {
        return longtoshort.get(longUrl) || "";
    }
    longtoshort.set(longUrl, String(count));
    shorttolong.set(String(count), longUrl);

    return String(count++);
}

/**
 * Decodes a shortened URL to its original URL.
 */
export function decode(shortUrl: string): string {
    return shorttolong.get(shortUrl) || "";
}
let count = 0;
/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
const longtoshort = new Map<string, string>();
const shorttolong = new Map<string, string>();
