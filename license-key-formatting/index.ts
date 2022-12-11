export default function licenseKeyFormatting(s: string, k: number): string {
    //@ts-ignore
    const str = s.replaceAll("-", "").toUpperCase();

    return Array(Math.ceil(str.length / k))
        .fill(0)
        .map((_, i) =>
            i === 0
                ? str.length % k
                    ? str.slice(0, str.length % k)
                    : str.slice(i * k, i * k + k)
                : str.length % k
                ? str.slice(
                      -k + (str.length % k) + i * k,
                      -k + (str.length % k) + i * k + k
                  )
                : str.slice(i * k, i * k + k)
        )
        .join("-");
}
