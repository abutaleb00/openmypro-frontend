
export const metadata = { title: 'Company - OpenMyPro Replica' }

export default function CompanyPage() {
    const items = [
        { title: 'About Us', text: 'We connect clients with world-class wellness professionals.' },
        { title: 'Careers', text: 'We are hiring passionate builders and designers.' },
        { title: 'Contact', text: 'Reach us for partnerships and media.' },
    ]
    return (
        <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
            <h1 className="text-3xl md:text-5xl font-extrabold">Company</h1>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {items.map((i) => (
                    <div key={i.title} className="card p-6">
                        <div className="text-xl font-semibold">{i.title}</div>
                        <p className="mt-2 text-omp-gray">{i.text}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}
