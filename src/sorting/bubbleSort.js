export const bubbleSort = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  } else if (arr.length > 10_000) {
    throw new Error('Please use a different sorting algorithm for sets larger than 10,000');
  }

  let sortingComplete;
  let sortedOrder = 0;

  while (!sortingComplete) {
    sortedOrder = 0;

    for (let i = 0; i < arr.length; i++) {
      const j = i + 1;

      if (typeof arr[i] !== 'number' || (j < arr.length && typeof arr[j] !== 'number')) {
        throw new Error('All values in the input must be numbers');
      }

      if (j >= arr.length) {
        continue;
      } else if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        sortedOrder++;
      }
    }

    sortingComplete = sortedOrder === arr.length - 1;
  }

  return arr;
};
