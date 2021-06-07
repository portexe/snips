export const insertionSort = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  } else if (!arr.every(item => typeof item === 'number')) {
    throw new Error('All values in the input must be numbers');
  }

  for (let i = 1; i < arr.length; i++) {
    let selectedIndex = i;
    let swapIndex = i - 1;

    while (swapIndex >= 0 && arr[selectedIndex] < arr[swapIndex]) {
      [arr[swapIndex], arr[selectedIndex]] = [
        arr[selectedIndex],
        arr[swapIndex],
      ];
      selectedIndex--;
      swapIndex--;
    }
  }

  return arr;
};
