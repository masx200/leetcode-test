export default function isValid(code: string): boolean {
    if (!/^<([A-Z]{1,9})>[\s\S]*<\/\1>$/.test(code)) return false;
    code = code.replace(/<!\[CDATA\[[\s\S]*?]]>/g, " ");
    const tagReg = /<([A-Z]{1,9})>[^<]*<\/\1>/g;
    while (code && tagReg.test(code)) {
        code = code.replace(tagReg, "");
    }
    return !code;
}
