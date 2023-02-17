import { expect, test } from 'vitest';
import { add } from './index';

test('addition', () => {
	expect(add(2, 2)).toBe(4);
});
