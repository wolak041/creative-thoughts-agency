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
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
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
            const { pathname } = request.nextUrl;
            const user = auth?.user;
            const isAuthenticated = !!user;
            const isAdmin = user?.isAdmin;

            const isAdminRoute = pathname.startsWith("/admin");
            const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");

            if (isAdminRoute) {
                if (!isAuthenticated) {
                    return Response.redirect(new URL("/login", request.nextUrl));
                }
                if (!isAdmin) {
                    return Response.redirect(new URL("/", request.nextUrl));
                }
                return true;
            }

            if (isAuthRoute && isAuthenticated) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};
