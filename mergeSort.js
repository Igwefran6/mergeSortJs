//assignment 1

function fibs(n) {
    n = n - 2;
    let arrFib = [0, 1];
    for (let i = 0; i < n; i++) {
        let x = arrFib[arrFib.length - 2] + arrFib[arrFib.length - 1];
        arrFib.push(x);
    }
    return arrFib;
}

function fibsRec(n, series = []) {
    if (n <= 0) {
        return series;
    }

    if (series.length <= 1) {
        series.push(series.length);
    } else {
        series.push(series[series.length - 1] + series[series.length - 2]);
    }

    return fibsRec(n - 1, series);
}

console.log("From assignment 1: " + fibsRec(7) + " fibonnaci series");

//assignment 2
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [4, 2, 7, 1, 9, 5, 3];
const sortedArr = mergeSort(arr);
console.log("From assignment 2: " + sortedArr + " array sorter");