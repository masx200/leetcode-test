function jsonStringify(object: any): string {
    //@ts-ignore
    return "[object Null]" === toString.call(object)
        ? "null"
        : typeof object === "string"
        ? `"${object}"`
        : typeof object === "boolean"
        ? object ? "true" : "false"
        : typeof object === "object"
        ? Array.isArray(object)
            ? `[${object.map(jsonStringify).join(",")}]`
            : `{${
                Object.entries(object).map(
                    ([key, value]) =>
                        jsonStringify(key) + ":" + jsonStringify(value),
                )
            }}`
        : typeof object === "number"
        ? object.toString()
        : "";
}

export default jsonStringify;
