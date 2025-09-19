export default function ExpandNetworkSection({
    ctaHref = "/add-my-doctor",
}: { ctaHref?: string }) {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-100 relative overflow-hidden">
            {/* soft glows */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-teal-100/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-sm font-medium text-gray-700 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-4 h-4 mr-2">
                                    <path d="M5 12h14" /><path d="M12 5v14" />
                                </svg>
                                Expand Our Network
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                                Can&apos;t find your{" "}
                                <span className="bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 bg-clip-text text-transparent">
                                    Pro or Wellness Center
                                </span>{" "}
                                in our directory?
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Help us grow our network by adding your trusted professional.
                                We&apos;ll verify their credentials and make them available to our community.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
                                <span className="text-gray-700">Quick verification process</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                                <span className="text-gray-700">Credential verification included</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                <span className="text-gray-700">Available to community within 48 hours</span>
                            </div>
                        </div>

                        {/* CTA (anchor styled as button) */}
                        <div className="pt-4">
                            <a
                                href={ctaHref}
                                className="group relative inline-flex bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                                aria-label="Add my Pro or Wellness Center"
                            >
                                <span className="relative z-10 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300">
                                        <path d="M5 12h14" /><path d="M12 5v14" />
                                    </svg>
                                    Add my Pro or Wellness Center
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </a>
                        </div>

                        {/* stats */}
                        <div className="flex items-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">500+</div>
                                <div className="text-gray-600 text-sm">Pros Added</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">24h</div>
                                <div className="text-gray-600 text-sm">Avg. Approval</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">99%</div>
                                <div className="text-gray-600 text-sm">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* right column (card) */}
                    <div className="relative z-20">
                        <div className="relative">
                            {/* floating chip (top-left) */}
                            <div className="absolute -top-8 -left-8 w-32 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 flex items-center justify-center animate-float z-30">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="w-4 h-4">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                    <span className="text-sm font-medium">Searching...</span>
                                </div>
                            </div>

                            {/* floating plus (bottom-right) */}
                            <div
                                className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 flex items-center justify-center animate-float z-30"
                                style={{ animationDelay: "1s" }}
                            >
                                <a
                                    href={ctaHref}
                                    aria-label="Add Pro or Wellness Center"
                                    className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="w-6 h-6 text-white">
                                        <path d="M5 12h14" /><path d="M12 5v14" />
                                    </svg>
                                </a>
                            </div>

                            {/* main card */}
                            <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden h-96 z-20">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5" />
                                <div className="h-full flex flex-col items-center justify-center relative p-8">
                                    {/* subtle radial texture */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500"
                                            style={{
                                                backgroundImage:
                                                    "radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120,219,255,0.3) 0%, transparent 50%)",
                                            }}
                                        />
                                    </div>

                                    <div className="relative z-10 text-center space-y-6">
                                        <div className="relative mx-auto w-32 h-32">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-inner" />
                                            <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="w-12 h-12 text-gray-400">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <path d="m21 21-4.3-4.3" />
                                                </svg>
                                            </div>

                                            <a
                                                href={ctaHref}
                                                aria-label="Add Pro or Wellness Center"
                                                className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="w-5 h-5 text-white">
                                                    <path d="M5 12h14" /><path d="M12 5v14" />
                                                </svg>
                                            </a>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-gray-700">
                                                Pro or Wellness Center Not Found?
                                            </h3>
                                            <p className="text-gray-500 text-sm max-w-xs mx-auto">
                                                Can&apos;t find your professional? Help us grow our network by adding your
                                                trusted health, wellness, or lifestyle professional.
                                            </p>
                                        </div>

                                        <a
                                            href={ctaHref}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-sm font-medium text-teal-700"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="w-4 h-4">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <line x1="19" x2="19" y1="8" y2="14" />
                                                <line x1="22" x2="16" y1="11" y2="11" />
                                            </svg>
                                            Click to add Pro or Wellness Center
                                        </a>
                                    </div>

                                    {/* bouncing dots */}
                                    <div className="absolute top-12 right-12 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce border border-teal-100">
                                        <div className="w-3 h-3 bg-teal-400 rounded-full" />
                                    </div>
                                    <div
                                        className="absolute bottom-12 left-12 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce border border-blue-100"
                                        style={{ animationDelay: "0.5s" }}
                                    >
                                        <div className="w-3 h-3 bg-blue-400 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /right column */}
                </div>
            </div>
        </section>
    );
}
