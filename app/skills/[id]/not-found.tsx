import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Skill Not Found</h1>
            <p className="text-gray-600">Sorry, the skill you are looking for does not exist.</p>
            <div className="mt-6">
                <Link
                    href="/skills"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    Back to Skills List
                </Link>
            </div>
        </div>
    )
}