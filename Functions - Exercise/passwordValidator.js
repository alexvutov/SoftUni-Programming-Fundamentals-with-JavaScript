function passwordValidator(password) {
    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;
    if (isInvalidLength) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }
}
passwordValidator('logIn');