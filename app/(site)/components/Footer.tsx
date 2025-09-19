'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'

export const Footer: React.FC = () => {
    return (
        <footer className="font-sans tracking-wide bg-gray-100 px-4 sm:px-8 lg:px-10 pt-10 pb-6">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-6">
                    <Link
                        href="https://www.blossend.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-block"
                        aria-label="Blossend website"
                    >
                        <Image
                            src="/newBlossendLogo.png"
                            alt="Blossend"
                            width={220}
                            height={64}
                            className="p-2 bg-white rounded-lg border border-[#0077b6] hover:scale-105 transition-transform"
                        />
                    </Link>

                    <div className="mt-6 max-w-xl text-sm leading-relaxed text-gray-600">
                        <p>
                            <a
                                href="https://www.blossend.com/about"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="font-semibold underline hover:text-gray-800"
                            >
                                About
                            </a>
                            : OpenMyPro app by Blossend is a teleservices platform offering
                            streamlined, optimized, &amp; automated Pro-to-Consumer real-time,
                            24/7 online scheduling — redefining how professionals &amp;
                            consumers connect to make their services more accessible &amp;
                            efficient. Our solution ensures a seamless, accurate, &amp;
                            personalized discovery &amp; booking experience — enabling anyone
                            to effortlessly find &amp; book the right appointment in under 3
                            clicks &amp; 33 seconds, worldwide. Powered by AI/ML precision,
                            we address the urgent need for instant, intelligent teleservices
                            access. We empower solo skilled pros &amp; businesses with
                            exposure, client acquisition, &amp; streamlined operations —
                            reducing customer leakage, no-shows, administrative overhead, &amp;
                            automating workflows, while solving everyday Pro-to-Consumer
                            challenges &amp; boosting their solo or large business centers.
                            Consumers gain the fastest, simplest, most transparent, flexible,
                            &amp; customizable experience to connect with professionals —
                            anytime, anywhere, &amp; much more!
                        </p>
                    </div>

                    <ul className="mt-8 flex items-center gap-4">
                        <li>
                            <Link
                                href="https://wa.me/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="WhatsApp"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:text-gray-800"
                                title="WhatsApp"
                            >
                                <MessageCircle className="h-9 w-9" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/company/blossend/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="LinkedIn"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:text-gray-800"
                                title="LinkedIn"
                            >
                                <Linkedin className="h-9 w-9" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/blossend.apps/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Instagram"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:text-gray-800"
                                title="Instagram"
                            >
                                <Instagram className="h-9 w-9" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-gray-800 font-semibold">Download</h4>
                    <ul className="mt-6 space-y-4">
                        <li>
                            <Link
                                href="https://apps.apple.com/us/app/open-my-doctor-doctor-finder/id6737090324"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Download on the App Store"
                                className="inline-block"
                            >
                                <Image
                                    src="/images/appstore.png"
                                    alt="App Store"
                                    width={176}
                                    height={54}
                                    className="h-[54px] w-44 hover:scale-95 transition"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.blossend.omd"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Get it on Google Play"
                                className="inline-block"
                            >
                                <Image
                                    src="/images/googleplay.png"
                                    alt="Google Play"
                                    width={176}
                                    height={54}
                                    className="h-[54px] w-44 hover:scale-95 transition"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-gray-800 font-semibold">Useful Links</h4>
                    <ul className="mt-6 space-y-2 text-sm">
                        <li>
                            <a
                                href="https://www.blossend.com/contact"
                                className="text-gray-600 hover:text-gray-800"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Help &amp; Support
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.blossend.com/contact"
                                className="text-gray-600 hover:text-gray-800"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-gray-800 font-semibold">Contact</h4>
                    <ul className="mt-6 space-y-1 text-sm text-gray-600">
                        <li>Blossend</li>
                        <li>Austin, TX</li>
                    </ul>
                </div>
            </div>
            <hr className="mt-10 mb-4 border-gray-300" />
            <div className="mx-auto max-w-7xl">
                <p className="text-center text-sm text-gray-600">
                    Copyright © {new Date().getFullYear()}{' '}
                    <a
                        href="https://www.blossend.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Blossend
                    </a>
                    . All rights reserved.
                </p>

                <div className="mt-3 flex items-center justify-center gap-4 text-sm">
                    <Link href="/Terms&Conditions" className="text-gray-600 hover:text-gray-800">
                        Terms of Service
                    </Link>
                    <span className="hidden h-5 w-px bg-gray-400 md:inline-block" />
                    <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
