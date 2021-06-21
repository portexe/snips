import { expect } from 'chai';
import { mergeSort } from './mergeSort.js';

describe.only('mergeSort', () => {
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

    expect(mergeSort(test1)).to.eql(expectedResult1);
    expect(mergeSort(test2)).to.eql(expectedResult2);
    expect(mergeSort(test3)).to.eql(expectedResult3);
    expect(mergeSort(test4)).to.eql(expectedResult4);
    expect(mergeSort(test5)).to.eql(expectedResult5);
    expect(mergeSort(test6)).to.eql(expectedResult6);
  });

  it('Throw error if input is not an array', () => {
    expect(() => mergeSort('Hello World')).to.throw('Input must be an array');
  });

  it('Throw error if array contains values other than numbers', () => {
    expect(() => mergeSort([1, 2, '3'])).to.throw(
      'All values in the input must be numbers',
    );
    expect(() => mergeSort([1, [], 3])).to.throw(
      'All values in the input must be numbers',
    );
    expect(() => mergeSort([{}, 2, 3])).to.throw(
      'All values in the input must be numbers',
    );
    expect(() => mergeSort([true])).to.throw(
      'All values in the input must be numbers',
    );
  });
});
