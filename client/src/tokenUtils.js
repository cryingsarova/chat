export const setToken = token => {
    console.log(token);
    localStorage.setItem("jwt-token", token);
};

export const getToken = () => localStorage.getItem("jwt-token");

export const removeToken = () => localStorage.removeItem("jwt-token");

export const getTokenInfo = () => {
    try {
        const token = getToken();
        console.log(token);
        if (token) {
            const payload = window.atob(token.split(".")[1]);
            console.log('payload ' + payload);
            return JSON.parse(payload);
        }
    } catch (error) {
        console.error(error);
    }
};

export const isAuthed = () => {
    const token_info = getTokenInfo();

    if (token_info && token_info.exp > Math.round(new Date() / 1000)) {
        return token_info.id;
    } else {
        return false;
    }
};