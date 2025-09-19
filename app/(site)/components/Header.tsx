'use client'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
                <div className="flex items-center justify-between rounded-full bg-white/90 border border-gray-200 ring-1 ring-white/70 shadow-[0_6px_20px_rgba(15,34,55,0.08)] px-3 sm:px-4 h-[60px]">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.jpg"
                            alt="OpenMyPro"
                            width={36}
                            height={36}
                            className="rounded-md"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-3 flex-1 mx-3 lg:mx-6">
                        <div className="flex items-center w-full rounded-full border border-gray-300/70 h-12 pl-3 pr-2">
                            <Menu className="w-5 h-5 text-omp-navy/70" />
                            <select
                                className="ml-2 bg-transparent text-sm font-medium text-omp-navy/80 outline-none"
                                defaultValue="pro"
                                aria-label="Category"
                            >
                                <option value="pro">Wellness Pro</option>
                                <option value="symptoms">Symptoms</option>
                                <option value="speciality">Speciality</option>
                                <option value="location">Location</option>
                            </select>

                            <span className="mx-3 h-6 w-px bg-gray-300/70" aria-hidden />

                            <input
                                placeholder="Search Pro Name"
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                            />
                            <Link
                                href="/search"
                                aria-label="Search"
                                className="ml-2 inline-grid place-items-center h-9 w-9 rounded-full bg-omp-navy text-white border-2 border-white shadow-[0_4px_12px_rgba(15,34,55,.25)] hover:bg-omp-navy/90"
                            >
                                <Search className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <nav className="flex items-center gap-3 pl-3">
                        <Link
                            href="/company"
                            className="hidden sm:block pr-3 font-semibold text-omp-navy"
                        >
                            Company
                        </Link>
                        <span className="hidden sm:block h-6 w-px bg-gray-300/70 mr-1" />
                        <Link
                            href="/signin"
                            className="inline-flex items-center justify-center h-9 px-4 rounded-md border border-[#1BA493] bg-[#E7FAF5] text-sm font-semibold text-[#0F8C7E] shadow-[inset_0_-1px_0_rgba(15,140,126,0.08)]
               hover:bg-[#DFF7F0] transition focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-[#0F8C7E]/30"
                        >
                            Sign in
                        </Link>

                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center h-9 px-5 rounded-md bg-[#16A394] text-white text-sm font-semibold
               shadow-[0_6px_14px_rgba(22,163,148,0.32)]
               hover:bg-[#0F8C7E] transition focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-[#16A394]/30"
                        >
                            Sign up
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
