function getArraysSum(arr1, arr2) {
  // write code here
  if (arr1.length === 0 && arr2.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] + arr2[i];
  }

  return sum;
}
