import { describe, it, expect } from 'vitest'
import { sum } from '../helpers/sum';

describe('Sum function', () => {
  it('Should return the sum of two correct numbers', () => {
    const a = 1;
    const b = 2;
    const expected = 3;

    expect(sum(a, b)).toBe(expected);
  })
})