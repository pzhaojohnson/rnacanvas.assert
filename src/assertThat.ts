/**
 * Throws if the condition is falsy.
 *
 * Does nothing otherwise.
 */
export function assertThat(condition: unknown): void | never {
  if (!condition) {
    throw new Error('Failed assertion.');
  }
}
