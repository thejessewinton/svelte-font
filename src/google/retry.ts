import asyncRetry from 'async-retry';

export async function retry<T>(
  fn: asyncRetry.RetryFunction<T>,
  retries: number
) {
  return await asyncRetry(fn, {
    retries,
    onRetry(e: unknown, attempt: unknown) {
      console.error(
        (e as Error).message + `\n\nRetrying ${attempt}/${retries}...`
      );
    },
    minTimeout: 100,
  });
}
