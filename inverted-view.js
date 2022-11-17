
const {performance} = require('perf_hooks');

const invertedView = (number_search) => {
  const startTime = performance.now()
  const blockedNumbers = [3, 4, 7];

  let positionOfTestedNumber = 0;
  let numberUnderTest = 0;

  while(positionOfTestedNumber !== number_search) {
    const splittedNumber = String(numberUnderTest).split("")

    let isPossibleInvert = true;

    for (let i = 0; i < splittedNumber.length; i++) {
      if (blockedNumbers.includes(Number(splittedNumber[i]))) {
        isPossibleInvert = false;

        break;
      }
    }

    if (isPossibleInvert && numberUnderTest != 0) {
      positionOfTestedNumber++;
    }

    if (positionOfTestedNumber < number_search) {
      numberUnderTest++;
    }
  }

  const endTime = performance.now()

  console.log(`Number under test: ${numberUnderTest}`)
  console.log(`Position of number: ${positionOfTestedNumber}`)
  console.log(`Found the number at ${((endTime - startTime) / 1000).toFixed(2)} seconds`)
}

invertedView(1000000)
