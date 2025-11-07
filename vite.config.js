// vite.config.js (Guaranteed Base Path for GitHub Pages Build)
import {defineConfig} from 'vite';

const repoName = 'yogeshphalak.github.io';

export default defineConfig(({command}) => {
    return {
        // If the command is 'serve' (local development), base is '/'.
        // If the command is 'build' (production), base is the repository name.
        base: command === 'serve'
            ? '/'
            : `/${repoName}/`, // This guarantees the GitHub Pages path in the final build.

        // ... rest of your config (plugins, etc.)
    };
});