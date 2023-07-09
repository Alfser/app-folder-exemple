import getUserDetails from "@/lib/getUserDetails";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
    params: {
        userId: string;
    }
}

export async function generateMetadata({params:{ userId }}: 
    Params): Promise<Metadata> {
    const userData: Promise<User> = getUserDetails(userId);
    const user = await userData;
    return {
        title: user.name,
        description: `Essa a página do usuário ${user.name}`
    }
}

export default async function UserDetailsPage({params: { userId }}: Params) {
    const userData: Promise<User> = getUserDetails(userId);
    const userPostsData: Promise<Posts[]> = getUserPosts(userId);
    const user = await userData;

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}
