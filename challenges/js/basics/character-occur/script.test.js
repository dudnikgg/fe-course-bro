import { describe, test, expect } from 'vitest'
import countOccurrences from './script.js'

describe('countOccurrences', () => {
  test('should return the number of occurrences', () => {
    expect(countOccurrences('a', 'abc')).toBe(1)
    expect(countOccurrences('a', 'abcahklnmhg')).toBe(2)
    expect(countOccurrences('c', 'abababababa')).toBe(0)
  })

  test('should return undefined if the input is not a string', () => {
    expect(countOccurrences('a', 1)).toBe(undefined)
  })

  test('should return undefined if the input is an empty string', () => {
    expect(countOccurrences('a', '')).toBe(undefined)
  })
});