import RegisterForm from "@/components/registerForm/registerForm";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="flex flex-1 md:flex-[none] flex-col items-center">
            <div className="flex flex-col gap-10 min-w-[100%] md:min-w-[34rem] bg-zinc-900 p-12 rounded-lg">
                <RegisterForm />
                <Link href="/login" className="text-blue-500 underline">
                    Already have an account? Login here
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
