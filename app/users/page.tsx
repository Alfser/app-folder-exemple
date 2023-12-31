import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Usuários",
    description: "Lista de usuários"
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData
    
    console.log("Hello");

    const content = (
        <section>
            <h2>
                <Link href='/'>ir para tela principal</Link>
            </h2>
            <br />
            {users.map((user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link key={user.id} href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </p>
                        <br />
                    </>
                )
            }))}
        </section>
    )
    return content;
}
