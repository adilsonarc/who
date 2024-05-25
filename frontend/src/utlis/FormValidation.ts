export const validateUrl = (url: string): string | undefined => {
    try {
        new URL(url);
    } catch (error) {
        return 'Invalid URL';
    }
};