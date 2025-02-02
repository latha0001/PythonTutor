import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                PythonPal
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Tutor</Link>
                    </li>
                    <li>
                        <Link href="/">Settings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}