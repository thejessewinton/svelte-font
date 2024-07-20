/**
 * Throw SvelteFontError error. Used by the WellKnownErrorsPlugin to format errors thrown by svelte-font.
 */
export function svelteFontError(message: string): never {
  const err = new Error(message);
  err.name = 'SvelteFontError';
  throw err;
}
