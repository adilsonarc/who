export const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return Promise.reject();
        }
        return await response.json();
    } catch (e) {
        return Promise.reject();
    }
};