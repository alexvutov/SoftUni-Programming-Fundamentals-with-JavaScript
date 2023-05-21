function printAndSum(start, end) {
    let sum = 0;
    let numbers = "";

    for (let number = start; number <= end; number++) {
        sum += number;
        numbers += `${number} `;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);