export function getUserData() {
    // Get user data from localStorage or state
    const userData = JSON.parse(localStorage.getItem('login'));
    return userData;
  }