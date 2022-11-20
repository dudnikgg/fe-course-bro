import { describe, test, expect } from 'vitest';
import evenNumbers from './script.js';

describe("evenNumbers", () => {
    test("should print even numbers", () => {
        expect(evenNumbers([23,56,4,78,5,63,45,210])).toBe([ 56,4,78,210 ]);
        expect(evenNumbers([13,23,12,45,22,48,66,100])).toBe([12,22,48,66,100]);
        expect(evenNumbers([1,3,5,7,9,11,13,15,17,19])).toBe([]);
        expect(evenNumbers([2,4,6,8,10,12,14,16,18,20])).toBe([2,4,6,8,10,12,14,16,18,20]);
    });
});