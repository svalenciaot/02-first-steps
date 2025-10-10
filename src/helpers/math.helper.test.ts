import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positive numbers', () => {

        // 1. Arrange
        const a = 1
        const b = 2

        // 2. Act
        const result = add(a, b);
        console.log({ result });

        // 3. Assert
        expect(result).toBe(a + b)
    })
})
describe('subtract', () => {
    test('should subtract two positive numbers', () => {

        const a = 8
        const b = 1

        const result = subtract(a, b);
        console.log({ result });

        expect(result).toBe(a - b)
    })
})
describe('multiply', () => {
    test('should multiply two positive numbers', () => {

        const a = 5
        const b = 0

        const result = multiply(a, b);
        console.log({ result });

        expect(result).toBe(a * b)
    })
})
