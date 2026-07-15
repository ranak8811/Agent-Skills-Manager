import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="navbar bg-base-100 shadow-sm">
                <Link href="/" className="btn text-xl">Agent Skills Manager</Link>
                <div className="flex-1">

                </div>

                <ul className="menu menu-horizontal p-0 gap-4">

                    <li>
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/register">Register</Link>
                    </li>

                </ul>
            </div>
        </header>
    );
}