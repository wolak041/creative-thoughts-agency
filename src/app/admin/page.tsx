import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

const AdminPage = async () => {
    const session = await auth();

    return (
        <div className="flex flex-col gap-36">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:flex-1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className="md:flex-1">
                    <AdminPostForm userId={session!.user.username} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:flex-1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className="md:flex-1">
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
