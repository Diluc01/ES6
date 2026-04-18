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

function getSpeedStatistic(testResults) {
  // write code here
  if (testResults.length === 0) {
    return [0, 0, 0];
  }

  let min = testResults[0];
  let max = testResults[0];
  let sum = 0;

  for (const result of testResults) {
    if (result > max) {
      max = result;
    }

    if (result < min) {
      min = result;
    }

    sum += result;
  }

  const average = Math.floor(sum / testResults.length);

  return [min, max, average];
}

function getSuccessRate(statistic) {
  // write code here
  if (statistic === "") {
    return 0;
  }

  let counter = 0;

  for (const num of statistic) {
    if (num === "1") {
      counter++;
    }
  }

  return (counter * 100) / statistic.length;
}

function getPlan(startProduction, numberOfMonths, percent) {
  // write code here

  let goals = [];
  let currentProduction = startProduction;

  for (let i = 0; i < numberOfMonths; i++) {
    const increase = Math.floor(currentProduction * (percent / 100));
    currentProduction += increase;
    goals.push(currentProduction);
  }

  return goals;
}

function isJumping(n) {
  // write code here
  const string = String(n);

  for (let i = 1; i < string.length; i++) {
    const diff = string[i] - string[i - 1];

    if (diff !== 1 && diff !== -1) {
      return "NOT JUMPING";
    }
  }

  return "JUMPING";
}

function makeAbbr(words) {
  // write code here
  let abbreviation = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i] === " ") {
      abbreviation += words[i + 1];
    }
  }

  return abbreviation.toUpperCase();
}

function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case "addProperties":
        Object.assign(state, action.extraData);
        break;
      case "removeProperties":
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case "clear":
        for (const key in state) {
          delete state[key];
        }
    }
  }
}
