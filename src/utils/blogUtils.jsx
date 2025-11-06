/**
 * Generates a URL-safe slug from a string.
 * This function must be used consistently across all components (data, cards, template)
 * to ensure routing links match.
 * @param {string} text - The input string (e.g., blog title).
 * @returns {string} The slugified string.
 */
export const slugify = (text) => {
    return text.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove all non-word characters (except spaces and hyphens)
        .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};