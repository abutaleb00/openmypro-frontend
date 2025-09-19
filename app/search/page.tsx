
export const metadata = { title: 'Search - OpenMyPro Replica' }

export default function SearchPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
            <h1 className="text-3xl md:text-5xl font-extrabold">Search</h1>
            <p className="text-omp-gray mt-3">This is a placeholder search page. Hook it to your backend later.</p>
            <div className="card p-6 mt-6">
                <input className="w-full rounded-lg border px-3 py-2" placeholder="Try typing a specialty, pro, or location..." />
            </div>
        </main>
    )
}
