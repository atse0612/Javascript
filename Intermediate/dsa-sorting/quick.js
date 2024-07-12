/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];   // Starting the first element

  let idxSwap = start; //initial

  for (let s = start + 1; s <= end; s++) {
    if (pivot > arr[s]) {
      idxSwap++;
      swap(arr, idxSwap, s); //swap function to implement to pivot
    }
  }

  // Swapping pivot with the beginning point
  swap(arr, start, idxSwap);
  return idxSwap;
}


function quickSort(arr, left=0, right = arr.length - 1) { //Quicksort with the left and right paramenters
    if (left < right){
        let idxPivot = pivot(arr, left, right);
        quicksort(arr, left, idxPivot - 1); //left point
        quicksort(arr, idxPivot + 1, right); //right point
    }
    return arr;
}

module.exports = quickSort;