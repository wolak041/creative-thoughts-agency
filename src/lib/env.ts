export const env = {
    get MONGO(): string {
        const uri = process.env.MONGO;
        if (!uri) {
            throw new Error("MONGO is required");
        }
        return uri;
    },

    get BCRYPT_SALT_ROUNDS(): number {
        const rounds = process.env.BCRYPT_SALT_ROUNDS;
        return rounds ? parseInt(rounds, 10) : 12;
    },

    get GITHUB_ID(): string {
        const id = process.env.GITHUB_ID;
        if (!id) {
            throw new Error("GITHUB_ID is required");
        }
        return id;
    },

    get GITHUB_SECRET(): string {
        const secret = process.env.GITHUB_SECRET;
        if (!secret) {
            throw new Error("GITHUB_SECRET is required");
        }
        return secret;
    },
};
