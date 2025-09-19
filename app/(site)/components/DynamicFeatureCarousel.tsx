'use client'

import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Sparkles } from 'lucide-react'

export type Stat = { label: string; value: string; valueClass?: string }
export type CardItem = {
  id: string | number
  title: string
  blurb: string
  tag?: string
  iconTile?: ReactNode
  iconGradientClass?: string
  status?: string
  statusDotClass?: string
  href?: string
}

export interface DynamicFeatureCarouselProps {
  id?: string
  bgClass?: string
  accentHex?: string
  sectionIcon?: ReactNode
  heading: ReactNode
  subheading?: ReactNode
  highlight?: ReactNode
  announcement?: {
    badge: string
    title: string
    body?: string
    gradientClass?: string
  }
  stats?: Stat[]
  items: CardItem[]
  cta?: {
    text: string
    href: string
    from?: 'teal-600' | 'blue-600' | 'emerald-600' | 'cyan-600'
    to?: 'teal-600' | 'blue-600' | 'emerald-600' | 'cyan-600'
    className?: string
  }
}

function Card({ item }: { item: CardItem }) {
  return (
    <a
      href={item.href ?? '#'}
      className="group relative bg-white rounded-xl shadow-xl border border-gray-300
                 hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                 animate-fade-in overflow-hidden h-[280px] w-full max-w-lg mx-auto flex flex-col"
      style={{ marginTop: 8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />

      <div className="relative p-6 flex-1 flex flex-col justify-between">
        <div>
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg
                        bg-gradient-to-r ${item.iconGradientClass ?? 'from-blue-500 to-purple-600'}
                        mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            {item.iconTile}
          </div>

          {item.tag && (
            <span className="hidden sm:inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-3 max-w-fit truncate">
              {item.tag}
            </span>
          )}

          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600/80 transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 overflow-hidden">
            {item.blurb}
          </p>
        </div>

        {item.status && (
          <div className="flex items-center text-sm mt-auto">
            <span className={`w-2 h-2 rounded-full mr-2 ${item.statusDotClass ?? 'bg-green-400'}`} />
            <span className="font-medium text-green-600">{item.status}</span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  )
}

export default function DynamicFeatureCarousel({
  id,
  bgClass = 'bg-gradient-to-r from-blue-100 via-white to-blue-50',
  accentHex = '#16A394',
  sectionIcon,
  heading,
  subheading,
  highlight,
  announcement,
  stats,
  items,
  cta,
}: DynamicFeatureCarouselProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div
      id={id}
      className={`w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-6 lg:px-8 ${bgClass}`}
      style={
        {
          ['--bullet-color' as any]: 'rgba(15,34,55,.25)',
          ['--bullet-active' as any]: accentHex,
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto">
        <section className="py-12">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            {sectionIcon && <div className="inline-flex items-center justify-center mb-4">{sectionIcon}</div>}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{heading}</h2>
            {(subheading || highlight) && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {subheading}
                {highlight && <span className="block mt-1 text-lg text-emerald-600 font-medium">{highlight}</span>}
              </p>
            )}
          </div>

          {/* Announcement */}
          {announcement && (
            <div className="relative mb-10">
              <div
                className={`bg-gradient-to-r ${announcement.gradientClass ?? 'from-teal-600 to-blue-600'}
                  rounded-2xl p-6 text-white`}
              >
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-white/20 rounded-full">
                    <Sparkles className="w-6 h-6 text-white" />
                    <span className="text-lg font-bold text-white tracking-wider">{announcement.badge}</span>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {announcement.title}
                  </h3>

                  {announcement.body && (
                    <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">{announcement.body}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="hidden md:block bg-white rounded-xl shadow-lg border border-gray-200 p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className={`text-2xl font-bold mb-1 ${s.valueClass ?? 'text-emerald-600'}`}>{s.value}</div>
                    <div className="text-gray-600 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slider */}
          <div className="relative mb-14 sm:mb-10 pb-2">
            {/* nav buttons */}
            <button
              ref={prevRef}
              className="hidden sm:flex absolute left-[-14px] z-20 w-[42px] p-2
                         rounded-full border border-gray-300 bg-white/90 hover:bg-white
                         shadow-xl text-gray-800 hover:text-emerald-600 transition
                         [top:calc(50%-12px)]"
              aria-label="Prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="hidden sm:flex absolute right-[-14px] z-20 w-[42px] p-2
                         rounded-full border border-gray-300 bg-white/90 hover:bg-white
                         shadow-xl text-gray-800 hover:text-emerald-600 transition
                         [top:calc(50%-12px)]"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              onInit={(sw) => {
                // @ts-expect-error
                sw.params.navigation.prevEl = prevRef.current
                // @ts-expect-error
                sw.params.navigation.nextEl = nextRef.current
                sw.navigation.init()
                sw.navigation.update()
              }}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1.05}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
                1536: { slidesPerView: 4 },
              }}
              className="dyn-swiper overflow-visible"
            >
              {items.map((it) => (
                <SwiperSlide key={it.id}>
                  <Card item={it} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {cta && (
            <div className="pt-2 sm:pt-0 text-center">
              <a
                href={cta.href}
                className={[
                  'inline-flex w-full sm:w-auto justify-center items-center',
                  'rounded-xl font-semibold text-white px-6 py-3 text-base',
                  'bg-gradient-to-r from-teal-600 to-blue-600',
                  'hover:brightness-110 active:scale-[0.99] transition',
                  'shadow-lg select-none',
                  cta.className ?? '',
                ].join(' ')}
              >
                {cta.text}
              </a>
            </div>
          )}
        </section>
      </div>
      <style jsx global>{`
        .dyn-swiper .swiper-pagination {
          position: static !important;
          margin-top: 12px;
          pointer-events: none;
        }
        .dyn-swiper .swiper-pagination-bullet {
          background: var(--bullet-color);
          opacity: 1;
        }
        .dyn-swiper .swiper-pagination-bullet-active {
          background: var(--bullet-active);
        }
      `}</style>
    </div>
  )
}