function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numAsString = number.toString();
    let numberAsStringLength = numAsString.length;

    for (let index = 0; index < numberAsStringLength; index++) {

        let currentNumber = Number(numAsString[index])

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }


    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`




}

console.log(oddAndEvenSum(3495892137259234));