import { expect } from 'chai';
import { bubbleSort } from './bubbleSort.js';

describe('bubbleSort', () => {
  it('Should sort an array of numbers', () => {
    const test1 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const test2 = [-32, 0, 99];
    const test3 = [3, 1, 0, 222, -33, 9, -9, 3, 0, -33, -24];
    const test4 = [1, 1, 1, 1, -1];
    const test5 = [1, 2, 3];
    const test6 = [55];

    const expectedResult1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedResult2 = [-32, 0, 99];
    const expectedResult3 = [-33, -33, -24, -9, 0, 0, 1, 3, 3, 9, 222];
    const expectedResult4 = [-1, 1, 1, 1, 1];
    const expectedResult5 = [1, 2, 3];
    const expectedResult6 = [55];

    expect(bubbleSort(test1)).to.eql(expectedResult1);
    expect(bubbleSort(test2)).to.eql(expectedResult2);
    expect(bubbleSort(test3)).to.eql(expectedResult3);
    expect(bubbleSort(test4)).to.eql(expectedResult4);
    expect(bubbleSort(test5)).to.eql(expectedResult5);
    expect(bubbleSort(test6)).to.eql(expectedResult6);
  });

  it('Throw error if input is not an array', () => {
    expect(() => bubbleSort('Hello World')).to.throw('Input must be an array');
  });

  it('Throw error if array contains values other than numbers', () => {
    expect(() => bubbleSort([1, 2, '3'])).to.throw('All values in the input must be numbers');
    expect(() => bubbleSort([1, [], 3])).to.throw('All values in the input must be numbers');
    expect(() => bubbleSort([{}, 2, 3])).to.throw('All values in the input must be numbers');
    expect(() => bubbleSort([true])).to.throw('All values in the input must be numbers');
  });

  it('Throws error if array is too large for bubble sort', () => {
    const testInput = Array(10_001);
    testInput.fill(1);
    expect(() => bubbleSort(testInput)).to.throw(
      'Please use a different sorting algorithm for sets larger than 10,000',
    );
  });
});
