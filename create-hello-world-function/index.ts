export default function createHelloWorld(): (...args: any[]) => string {
    return function (..._args): string {
        return "Hello World";
    };
}
