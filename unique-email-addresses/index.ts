export default function numUniqueEmails(emails: string[]): number {
    return new Set(
        emails.map((email) => {
            const [first, second] = email.split("@");
            // deno-lint-ignore ban-ts-comment
            //@ts-ignore
            return first.split("+")[0].replaceAll(".", "") + "@" + second;
        })
    ).size;
}
