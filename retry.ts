import {
    RetryError,
    RetryOptions,
} from "https://deno.land/std@0.187.0/async/retry.ts";

export const defaultRetryOptions = {
    multiplier: 2,
    maxTimeout: 60000,
    maxAttempts: 5,
    minTimeout: 1000,
};
export async function retry<T>(
    fn: (() => Promise<T>) | (() => T),
    opts?: RetryOptions & {
        retryOnError?:
            | ((error: any) => Promise<boolean>)
            | ((error: any) => boolean);
    },
) {
    const retryOnError = opts?.retryOnError ?? (() => true);
    const options: Required<RetryOptions> = {
        ...defaultRetryOptions,
        ...opts,
    };

    if (options.maxTimeout >= 0 && options.minTimeout > options.maxTimeout) {
        throw new RangeError("minTimeout is greater than maxTimeout");
    }

    let timeout = options.minTimeout;
    let error: unknown;

    for (let i = 0; i < options.maxAttempts; i++) {
        try {
            return await fn();
        } catch (err) {
            if (!await retryOnError(err)) {
                throw err;
            }

            await new Promise((r) => setTimeout(r, timeout));
            timeout *= options.multiplier;
            timeout = Math.max(timeout, options.minTimeout);
            if (options.maxTimeout >= 0) {
                timeout = Math.min(timeout, options.maxTimeout);
            }
            error = err;
        }
    }

    throw new RetryError(error, options.maxAttempts);
}
