export function replaceNonAlphanumericToUTF8(str: string) {
    return str.replace(/[^a-zA-Z0-9]/g, (match) => {
        return `%${match.charCodeAt(0).toString(16).padStart(2, '0')}`;
    });
}