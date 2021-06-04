import { expect } from 'chai';
import { BinarySearchTreeNode } from './binarySearchTree.js';

describe('binarySearchTree', () => {
  it('Builds a tree from an array', () => {
    const testInput = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const tree = new BinarySearchTreeNode(testInput);
    expect(tree.value).to.eql(0);
  });

  it('Sums up all of the value of the tree', () => {
    const testInput = [2, 4, 6, 8, 10, -10, 0];
    const tree = new BinarySearchTreeNode(testInput);
    expect(tree.sum()).to.eql(20);
  });

  it('Should insert lesser numbers to the left', () => {
    const testInput = 0;
    const tree = new BinarySearchTreeNode(testInput);

    tree.insert(-1);

    expect(tree.left.value).to.eql(-1);
    expect(tree.right).to.eql(null);
  });
  it('Should insert lesser numbers to the left', () => {
    const testInput = 0;
    const tree = new BinarySearchTreeNode(testInput);

    tree.insert(1);

    expect(tree.left).to.eql(null);
    expect(tree.right.value).to.eql(1);
  });

  it("Should sort it's values and return it as an array", () => {
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

    expect(new BinarySearchTreeNode(test1).getSortedArray()).to.eql(
      expectedResult1,
    );
    expect(new BinarySearchTreeNode(test2).getSortedArray()).to.eql(
      expectedResult2,
    );
    expect(new BinarySearchTreeNode(test3).getSortedArray()).to.eql(
      expectedResult3,
    );
    expect(new BinarySearchTreeNode(test4).getSortedArray()).to.eql(
      expectedResult4,
    );
    expect(new BinarySearchTreeNode(test5).getSortedArray()).to.eql(
      expectedResult5,
    );
    expect(new BinarySearchTreeNode(test6).getSortedArray()).to.eql(
      expectedResult6,
    );
  });

  it('Throw error if input is not a number or array of numbers', () => {
    expect(() => new BinarySearchTreeNode('Hello World')).to.throw(
      'Input must be a number or an array of numbers',
    );
  });

  it('Throw error if array contains values other than numbers', () => {
    expect(() => new BinarySearchTreeNode([1, 2, '3'])).to.throw(
      'All values in the input must be numbers',
    );
    expect(() => new BinarySearchTreeNode([1, [], 3])).to.throw(
      'All values in the input must be numbers',
    );
    expect(() => new BinarySearchTreeNode([{}, 2, 3])).to.throw(
      'All values in the input must be numbers',
    );
    expect(() => new BinarySearchTreeNode([true])).to.throw(
      'All values in the input must be numbers',
    );
  });

  it("Finds elements within it's tree (if it exists) given a value", () => {
    const testInput = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const tree = new BinarySearchTreeNode(testInput);
    const foundNode = tree.find(5);
    expect(foundNode.value).to.eql(5);
  });
});
