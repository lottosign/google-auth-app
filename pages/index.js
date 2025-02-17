import { signIn } from "next-auth/react";

export default function Home() {
    return (
        <div>
            <h1>Google OAuth Login</h1>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
    );
}
