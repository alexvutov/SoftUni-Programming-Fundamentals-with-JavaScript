function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let charArray = [];

    for (let currentChar = startChar + 1; currentChar < endChar; currentChar++) {

        charArray.push(String.fromCharCode(currentChar));

    }

    return charArray.join(' ')

}
