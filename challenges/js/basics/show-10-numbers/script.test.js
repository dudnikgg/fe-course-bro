import { test, describe, expect, vi } from 'vitest';
import showNumbers from './script.js';

describe('showNumbers', () => {
  test('should show numbers from 1 to 10', () => {
    const spy = vi.spyOn(console, 'log');
    showNumbers();
    expect(spy).toHaveBeenCalledTimes(10);
    expect(spy).toHaveBeenNthCalledWith(1, 1);
    expect(spy).toHaveBeenNthCalledWith(2, 2);
    expect(spy).toHaveBeenNthCalledWith(3, 3);
    expect(spy).toHaveBeenNthCalledWith(4, 4);
    expect(spy).toHaveBeenNthCalledWith(5, 5);
    expect(spy).toHaveBeenNthCalledWith(6, 6);
    expect(spy).toHaveBeenNthCalledWith(7, 7);
    expect(spy).toHaveBeenNthCalledWith(8, 8);
    expect(spy).toHaveBeenNthCalledWith(9, 9);
    expect(spy).toHaveBeenNthCalledWith(10, 10);
  });
})