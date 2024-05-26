export const validateUrl = (urlString: string): string | undefined => {
    const errorMessage = 'Invalid URL';
    try {
        const url = new URL(urlString);
        if (url.hostname !== 'www.youtube.com' || !url.search.startsWith('?v=')) {
            return errorMessage;
        }
    } catch (error) {
        return errorMessage;
    }
};