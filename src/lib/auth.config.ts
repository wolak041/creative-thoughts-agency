import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: "/login",
        // signOut: "/login",
        // error: "/login",
        // verifyRequest: "/login",
        // newUser: "/register", // Will disable the new account creation screen
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user?.id) {
                token.id = user.id;
                token.username = user.username;
                token.isAdmin = user.isAdmin;
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.isAdmin = token.isAdmin;
            }

            return session;
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel =
                request.nextUrl.pathname.startsWith("/admin");
            const isOnLoginPage = request.nextUrl.pathname.startsWith("/login");
            const isOnRegisterPage =
                request.nextUrl.pathname.startsWith("/register");

            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }
            if ((isOnLoginPage || isOnRegisterPage) && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};
