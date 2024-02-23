import { assertThat } from './assertThat';

describe('assertThat function', () => {
  test('some truthy conditions', () => {
    expect(() => assertThat(true)).not.toThrow();
    expect(() => assertThat({})).not.toThrow();
    expect(() => assertThat('asdf')).not.toThrow();
    expect(() => assertThat(2)).not.toThrow();
  });

  test('some falsy conditions', () => {
    expect(() => assertThat(false)).toThrow();
    expect(() => assertThat(null)).toThrow();
    expect(() => assertThat(undefined)).toThrow();
    expect(() => assertThat('')).toThrow();
    expect(() => assertThat(0)).toThrow();
  });
});
