function ages(input) {
    let ages = Number(input);

    if (ages < 0) {
        console.log("out of bounds");

    } else if (ages >= 0 && ages <= 2) {
        console.log("baby");
    } else if (ages <= 13) {
        console.log("child");
    } else if (ages <= 19) {
        console.log("teenager");
    } else if (ages <= 65) {
        console.log("adult");
    } else if (ages >= 66) {
        console.log("elder");
    }


}
ages("66")