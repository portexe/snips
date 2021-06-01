import { expect } from 'chai';
import { getPrimeFactors } from './getPrimeFactors.js';

describe('getPrimeFactors', () => {
  it('Should find all of the prime factors of a given integer', () => {
    const test1 = 99;
    const test2 = 111;
    const test3 = 87436234;
    const test4 = 9007199254740991;
    const test5 = 121;
    const test6 = 4;

    const expectedResult1 = [3, 3, 11];
    const expectedResult2 = [3, 37];
    const expectedResult3 = [2, 43718117];
    const expectedResult4 = [6361, 69431, 20394401];
    const expectedResult5 = [11, 11];
    const expectedResult6 = [2, 2];

    expect(getPrimeFactors(test1)).to.eql(expectedResult1);
    expect(getPrimeFactors(test2)).to.eql(expectedResult2);
    expect(getPrimeFactors(test3)).to.eql(expectedResult3);
    expect(getPrimeFactors(test4)).to.eql(expectedResult4);
    expect(getPrimeFactors(test5)).to.eql(expectedResult5);
    expect(getPrimeFactors(test6)).to.eql(expectedResult6);
  });

  it('Should return empty if input is a prime number', () => {
    const testInput1 = 2;
    const testInput2 = 17;
    const expectedResult = [];

    expect(getPrimeFactors(testInput1)).to.eql(expectedResult);
    expect(getPrimeFactors(testInput2)).to.eql(expectedResult);
  });

  it('Should throw error if negative', () => {
    expect(() => getPrimeFactors(-25)).to.throw('Must be a positive integer greater than 0');
  });

  it('Should throw error if number is too large', () => {
    expect(() => getPrimeFactors(Number.MAX_SAFE_INTEGER + 1)).to.throw(
      'Number is too large to calculate safely in JavaScript',
    );
  });

  it('Should throw error if wrong data type', () => {
    expect(() => getPrimeFactors('123')).to.throw('Must be a positive integer greater than 0');
    expect(() => getPrimeFactors()).to.throw('Must be a positive integer greater than 0');
    expect(() => getPrimeFactors([])).to.throw('Must be a positive integer greater than 0');
    expect(() => getPrimeFactors({})).to.throw('Must be a positive integer greater than 0');
    expect(() => getPrimeFactors(true)).to.throw('Must be a positive integer greater than 0');
  });
});
