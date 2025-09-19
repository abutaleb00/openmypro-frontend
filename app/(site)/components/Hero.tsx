'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

function FeatureRow() {
    return (
        <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="group flex items-center gap-2 transition-transform hover:-translate-y-1">
                <span className="text-teal-600 transition-colors group-hover:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                <span className="text-sm text-gray-600 group-hover:text-gray-900">Wider Reach</span>
            </div>
            <div className="group flex items-center gap-2 transition-transform hover:-translate-y-1">
                <span className="text-teal-600 transition-colors group-hover:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                </span>
                <span className="text-sm text-gray-600 group-hover:text-gray-900">Practice Growth</span>
            </div>
            <div className="group flex items-center gap-2 transition-transform hover:-translate-y-1">
                <span className="text-teal-600 transition-colors group-hover:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                </span>
                <span className="text-sm text-gray-600 group-hover:text-gray-900">Higher Revenue</span>
            </div>
        </div>
    )
}

function MediaFrame({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-[40px] backdrop-blur-3xl rotate-6"></div>
            <div className="absolute inset-4 bg-white/80 rounded-[32px] overflow-hidden backdrop-blur-sm
                      shadow-[0_24px_60px_rgba(15,34,55,0.14),0_8px_20px_rgba(15,34,55,0.08)]">
                <div className="w-full h-full bg-gradient-to-tr from-teal-50 to-emerald-50 p-8">
                    <div className="relative w-full h-full">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(min-width:1024px) 640px, 100vw"
                            className="object-cover rounded-2xl"
                            priority
                        />
                        {/* subtle glass layer like original */}
                        <div className="w-full h-full rounded-2xl bg-white/50"></div>
                    </div>
                </div>
            </div>

            {/* glow dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-400/30 rounded-full blur-2xl"></div>
        </div>
    )
}

export default function Hero() {
    return (
        <section className="relative grid-bg">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                loop
                speed={700}
                className="hero-swiper"
            >
                <SwiperSlide>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 relative">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/50 border border-teal-200 backdrop-blur-sm">
                                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                                        <span className="text-sm font-medium text-teal-800">Join Our Network</span>
                                    </div>

                                    <div className="relative">
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                            Grow Your Business
                                            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500">With Us</span>
                                        </h1>
                                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
                                    </div>

                                    <p className="text-xl text-gray-600 max-w-lg relative z-10">
                                        Join our platform to grow your business effortlessly. Reach more clients, streamline bookings and payments,
                                        and unlock exclusive member benefits — so you can focus on delivering exceptional service.
                                    </p>
                                </div>

                                <div className="flex-col items-center gap-4">
                                    <Link href="/signup" className="group relative inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-teal-500/25">
                                        Join as a Wellness Pro
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                        <span className="absolute inset-0 rounded-xl bg-teal-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                                    </Link>

                                    <p className="text-xl text-gray-600 mt-6">
                                        Already a member?
                                        <Link href="/signin" className="ml-2 underline text-teal-600 font-semibold">Signin</Link>
                                    </p>
                                </div>

                                <FeatureRow />
                            </div>

                            <MediaFrame src="/images/slider-1.jpg" alt="Modern digital healthcare consultation" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 relative">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/50 border border-teal-200 backdrop-blur-sm">
                                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                                    <span className="text-sm font-medium text-teal-800">Wellness Pros Available Now</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Your Wellness Journey
                                    <span className="block mt-2 text-teal-600">Starts Here</span>
                                </h1>

                                <p className="text-xl text-gray-600 max-w-lg">
                                    Connect with top professionals, book appointments instantly, and take charge of your personal care journey.
                                </p>

                                <Link href="#available" className="group relative inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-teal-500/25">
                                    Get Started Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    <span className="absolute inset-0 rounded-xl bg-teal-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                                </Link>

                                <div className="grid grid-cols-3 gap-6 pt-8">
                                    <div className="flex items-center gap-2 text-teal-600"><span>✔</span><span className="text-sm text-gray-600">Verified Pros</span></div>
                                    <div className="flex items-center gap-2 text-teal-600"><span>🕑</span><span className="text-sm text-gray-600">24/7 Support</span></div>
                                    <div className="flex items-center gap-2 text-teal-600"><span>★</span><span className="text-sm text-gray-600">Top Rated</span></div>
                                </div>
                            </div>

                            <MediaFrame src="/images/slider-2.jpg" alt="Operating room view" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}