function interpret(command: string): string {
    // deno-lint-ignore ban-ts-comment
    //@ts-ignore
    return command.replaceAll("()", "o").replaceAll("(al)", "al");
}
export default interpret;
