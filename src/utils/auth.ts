export const getAuthTokenFromEnv = () => {
    if (import.meta.env.VITE_BEARER_AUTH_TOKEN) {
        return import.meta.env.VITE_BEARER_AUTH_TOKEN
    }
    else{
        console.log("Bearer token not found in env.");
    }
}