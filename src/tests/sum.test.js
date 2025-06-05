import { expect, test } from 'vitest'
import { sum } from './sum.js'

// changed file to fail this time
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4)
})
