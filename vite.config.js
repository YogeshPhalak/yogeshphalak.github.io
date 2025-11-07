// vite.config.js (Simplified Conditional Base Path using command)
import {defineConfig} from 'vite';

// Define the name of your repository for the GitHub Pages path
const repoName = 'yogeshphalak.github.io';

export default defineConfig(({command, mode}) => {
    // CRITICAL FIX: Base on command (serve vs. build) OR use your custom variable
    // For maximum reliability, let's combine command and your custom deploy flag for the build.

    const isDeployingToGitHub = mode === 'production' && process.env.VITE_APP_DEPLOY === 'github';

    return {
        // If the command is 'serve' (local dev), force base to '/'.
        // If the command is 'build', use your conditional logic to decide the base path.
        base: command === 'serve'
            ? '/'
            : (isDeployingToGitHub ? `/${repoName}/` : '/'),

        // ... rest of your config (plugins, etc.)
    };
});