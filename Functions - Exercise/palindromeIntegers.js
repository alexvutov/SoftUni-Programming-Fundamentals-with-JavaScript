function palindromeIntegers(arr) {

    for (let index = 0; index < arr.length; index++) {

        let numberAsString = arr[index].toString();
        let reversedNumber = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedNumber) {
            console.log(true);

        } else {
            console.log(false);
        }



    }


}

palindromeIntegers([123, 323, 421, 121]);