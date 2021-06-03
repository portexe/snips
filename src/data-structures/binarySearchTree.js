export class BinarySearchTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;

    if (typeof value === 'number') {
      this.value = value;
    } else if (Array.isArray(value)) {
      const wrongTypeMessage = 'All values in the input must be numbers';

      if (typeof value[0] === 'number') {
        this.value = value[0];
      } else {
        throw new Error(wrongTypeMessage);
      }

      for (let i = 1; i < value.length; i++) {
        if (typeof value[i] !== 'number') {
          throw new Error(wrongTypeMessage);
        } else {
          this.insert(value[i]);
        }
      }
    } else {
      throw new Error('Input must be an array or an array of numbers');
    }
  }

  insert(value) {
    if (value <= this.value) {
      this.left
        ? this.left.insert(value)
        : (this.left = new BinarySearchTreeNode(value));
    } else {
      this.right
        ? this.right.insert(value)
        : (this.right = new BinarySearchTreeNode(value));
    }
  }

  find(value) {
    if (value < this.value) {
      return this.left ? this.left.find(value) : null;
    } else if (value > this.value) {
      return this.right ? this.right.find(value) : null;
    } else if (this.value === value) {
      return this;
    } else {
      return null;
    }
  }

  sum() {
    return (
      (this.left ? this.left.sum() : 0) +
      (this.right ? this.right.sum() : 0) +
      this.value
    );
  }

  getSortedArray(sorted = []) {
    return [
      ...(this.left ? this.left.getSortedArray(sorted) : []),
      this.value,
      ...(this.right ? this.right.getSortedArray(sorted) : []),
    ];
  }
}
