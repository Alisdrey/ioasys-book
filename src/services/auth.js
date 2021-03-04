export const TOKEN_KEY = "@ioasys-book-token";
export const NAME = "@ioasys-book-name";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getName = () => localStorage.getItem(NAME);

export const saveLogin = (token, name) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(NAME, name);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(NAME);
    window.location.href = process.env.REACT_APP_URL
};
export const checkLogout401 = (error) => {
    console.log(error);
    if (error.toString().includes('code 401')) {
        logout();
    }
};


