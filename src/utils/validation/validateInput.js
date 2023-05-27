import matchPattern from "./matchPattern"

export const validationInput = (userInfo, errorMsg) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!matchPattern(emailPattern, userInfo.email) || !userInfo.email) {
        errorMsg.email = "Proper Email Required!"
    }

    if (!(userInfo.password)) {
        errorMsg.password = "Password Required!";
    }
}