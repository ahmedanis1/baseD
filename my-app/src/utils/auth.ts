
export const login = (username: string, password: string): void => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
};

export const isAuthenticated = (): boolean => {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    return !!username && !!password;
};

export const logout = (): void => {
    sessionStorage.clear();
};
