function getArrayMaxNumber(arr) {
  if (arr[0] < arr[1]) {
    if (arr[1] < arr[2]) {
      let max = arr[2];
    } else {
      let max = arr[1];
    }
  } else {
    let max = arr[0];
  }
}

const max = getArrayMaxNumber([10, 50, 30]);
console.log(max);
