import CredentialsLoginForm from "@/components/loginForms/credentials/credentialsLoginForm";
import GitHubLoginForm from "@/components/loginForms/github/gitHubLoginForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="flex flex-1 md:flex-[none] flex-col items-center gap-10">
            <div className="flex flex-col gap-10 min-w-[100%] md:min-w-[34rem] bg-zinc-900 p-12 rounded-lg">
                <CredentialsLoginForm />
                <GitHubLoginForm />
                <Link href="/register" className="text-blue-500 underline">
                    Don&#39;t have an account? Register here
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
