export default function validIPAddress(queryIP: string): string {
    if (queryIP.includes("::")) return "Neither";
    const result = isIP(queryIP);
    return result === 4 ? "IPv4" : result === 6 ? "IPv6" : "Neither";
}

// IPv4 Segment
const v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
const IPv4Reg = new RegExp(`^${v4Str}$`);

// IPv6 Segment
const v6Seg = "(?:[0-9a-fA-F]{1,4})";
const IPv6Reg = new RegExp(
    "^(" +
        `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` +
        `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` +
        `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` +
        `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` +
        `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` +
        `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` +
        `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` +
        `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` +
        ")(%[0-9a-zA-Z-.:]{1,})?$"
);

function isIPv4(ip: string) {
    return RegExp.prototype.test.call(IPv4Reg, ip);
}

function isIPv6(ip: string) {
    return RegExp.prototype.test.call(IPv6Reg, ip);
}

function isIP(ip: string) {
    if (isIPv4(ip)) {
        return 4;
    }
    if (isIPv6(ip)) {
        return 6;
    }

    return 0;
}
