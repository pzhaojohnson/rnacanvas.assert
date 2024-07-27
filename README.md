In general an assertion is a line of code that will throw (e.g., an error object)
if a condition is not met.

# Installation

With `npm`:

```
npm install @rnacanvas/assert
```

# Usage

All exported members of this package
are accessible as named imports.

```javascript
// an example import
import { assertThat } from '@rnacanvas/assert';
```

## `assertThat()`

Assert that a value is truthy.
(Note that this function will throw for all falsy values.)

```javascript
assertThat(true); // does not throw
assertThat(false); // throws

assertThat(2 === 2); // does not throw
assertThat(2 === 1); // throws

assertThat([1, 2, 3, 4, 5].length === 5); // does not throw
assertThat([1, 2, 3, 4, 5].length === 6); // throws

assertThat(1); // does not throw
assertThat(0); // throws
```
