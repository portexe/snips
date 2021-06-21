const merge = (left, right) => {
  const temp = [];

  while (left.length || right.length) {
    if (
      (left.length && typeof left[0] !== 'number') ||
      (right.length && typeof right[0] !== 'number')
    ) {
      throw new Error('All values in the input must be numbers');
    }

    temp.push(
      !right.length || left[0] <= right[0] ? left.shift() : right.shift(),
    );
  }

  return temp;
};

export const mergeSort = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  if (arr.length === 1) {
    if (typeof arr[0] !== 'number') {
      throw new Error('All values in the input must be numbers');
    } else {
      return arr;
    }
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
};
