
---

### `docs/tutorial/02-tests.md`
```markdown
# 02 — Add a Test & Run It

**Goal:** Add a simple unit test with Vitest and make it pass.

We already installed testing deps and added a sample test at `src/example.test.jsx`:

```jsx
// src/example.test.jsx
import { describe, it, expect } from 'vitest';

describe('Simple math test', () => {
  it('adds correctly', () => {
    expect(2 + 3).toBe(5);
  });
});
