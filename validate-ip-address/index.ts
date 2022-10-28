import { isIP } from "../deps.ts";

export default function validIPAddress(queryIP: string): string {
    if (queryIP.includes("::")) return "Neither";
    const result = isIP(queryIP);
    return result === 4 ? "IPv4" : result === 6 ? "IPv6" : "Neither";
}
