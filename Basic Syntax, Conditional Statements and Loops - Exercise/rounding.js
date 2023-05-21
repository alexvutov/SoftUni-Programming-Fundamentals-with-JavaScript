function rounding(number, precision) {
    if (precision > 15) {
        precision = 15
    }
    let result = parseFloat((number).toFixed(precision));
    console.log(result)
}
rounding(10.5111111111111111111111111111111, 16)