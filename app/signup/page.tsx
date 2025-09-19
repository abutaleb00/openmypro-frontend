
export const metadata = { title: 'Sign up - OpenMyPro Replica' }

export default function SignUpPage() {
    return (
        <main className="mx-auto max-w-md px-4 sm:px-6 py-10">
            <h1 className="text-3xl font-extrabold">Create your account</h1>
            <form className="card p-6 mt-6 space-y-4">
                <div>
                    <label className="text-sm">Full Name</label>
                    <input className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Jane Doe" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input type="email" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="you@example.com" />
                </div>
                <div>
                    <label className="text-sm">Password</label>
                    <input type="password" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Create a password" />
                </div>
                <button className="btn-primary w-full">Create account</button>
            </form>
        </main>
    )
}
