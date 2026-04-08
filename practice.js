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

function makeDecision(fuelRemaining, distance, fuelConsumption) {
  // write code here
  if (fuelRemaining < 0 || distance < 0 || fuelConsumption <= 0) {
    return "please, enter the valid data";
  }

  const availableDistance = (fuelRemaining / fuelConsumption) * 100;

  if (availableDistance < distance) {
    return "ask for help";
  } else {
    return "reach gas station by themselves";
  }
}
