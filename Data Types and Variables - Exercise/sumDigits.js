function sumDigits(digits) {

    let inputAsString = digits.toString();
    let sumOfDigits = 0;

    for (let index = 0; index < inputAsString.length; index++) {
        let currentDigit = Number(inputAsString[index]);

        sumOfDigits += currentDigit;
    }

    console.log(sumOfDigits);
}
sumDigits(245678);