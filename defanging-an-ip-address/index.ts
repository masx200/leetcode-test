export default function defangIPaddr(address: string): string {
    /*     ////// @ts-ignore */
    return address.replaceAll(".", "[.]");
}
