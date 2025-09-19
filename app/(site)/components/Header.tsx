'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, Info, Shield, FileText } from 'lucide-react'

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120) // small delay prevents flicker
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between rounded-full bg-white/90 border border-gray-200 ring-1 ring-white/70 shadow-[0_6px_20px_rgba(15,34,55,0.08)] px-3 sm:px-4 h-[60px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.jpg" alt="OpenMyPro" width={36} height={36} className="rounded-md" />
          </Link>

          {/* search */}
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

          {/* right nav */}
          <nav className="flex items-center gap-3 pl-3">
            {/* Company hover menu (no icon, no pointer cursor) */}
            <div
              className="relative hidden sm:block"
              onMouseEnter={cancelClose}
              onMouseLeave={startClose}
            >
              <span
                className="pr-3 font-semibold text-omp-navy cursor-default select-none"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                Company
              </span>

              <div
                role="menu"
                className={`absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-200/70 p-2
                transition-all duration-150 origin-top-left ${
                  open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                }`}
                onMouseEnter={cancelClose}
                onMouseLeave={startClose}
              >
                <Link href="/about" role="menuitem" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-800">
                  <Info className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">About</span>
                </Link>
                <Link href="/privacy" role="menuitem" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-800">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Privacy Policy</span>
                </Link>
                <Link href="/terms" role="menuitem" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-800">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">Terms of Service</span>
                </Link>
              </div>
            </div>

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