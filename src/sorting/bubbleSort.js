export const bubbleSort = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  } else if (arr.length > 25_000) {
    console.warn(
      'Consider using a different sorting algorithm for sets larger than 25,000',
    );
  }

  let sortingComplete;
  let numberOfSwaps = 0;

  while (!sortingComplete) {
    numberOfSwaps = 0;

    for (let i = 0; i < arr.length; i++) {
      const j = i + 1;

      if (
        typeof arr[i] !== 'number' ||
        (j < arr.length && typeof arr[j] !== 'number')
      ) {
        throw new Error('All values in the input must be numbers');
      }

      if (j >= arr.length) {
        continue;
      } else if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        numberOfSwaps++;
      }
    }

    sortingComplete = numberOfSwaps === 0;
  }

  return arr;
};
