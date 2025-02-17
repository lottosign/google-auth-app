import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();

    if (!session) {
        return <p>Not authenticated. <a href="/">Go back</a></p>;
    }

    return (
        <div>
            <h1>Welcome {session.user.name}</h1>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    );
}
