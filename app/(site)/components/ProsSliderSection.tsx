'use client'

import { useId, useMemo } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type ProCard = {
  id: string | number
  href: string
  fullName: string
  specialty: string
  city?: string
  price?: string
  rating?: number
  ratingCount?: number
  imageUrl: string
}

type Theme = {
  underlineFrom?: string
  underlineTo?: string
  buttonBg?: string
  buttonHover?: string
  barFrom?: string
  barTo?: string
  dotColor?: string
}

type Props = {
  title: string
  subTitle?: string
  seeAllHref?: string
  items: ProCard[]
  className?: string
  sectionBgClass?: string
  theme?: Theme
  idPrefix?: string
  showPingDot?: boolean
}

const defaultTheme: Required<Theme> = {
  dotColor: 'text-green-500',
  underlineFrom: 'from-teal-300',
  underlineTo: 'to-teal-500',
  buttonBg: 'bg-blue-600',
  buttonHover: 'hover:bg-blue-700',
  barFrom: 'from-blue-500',
  barTo: 'to-cyan-500',
}

function tw(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(' ')
}

export default function ProsSliderSection({
  title,
  subTitle,
  seeAllHref,
  items,
  sectionBgClass = '',
  theme: t = defaultTheme,
  idPrefix,
  className,
  showPingDot = true,
}: Props) {
  const uid = useId().replace(/[:]/g, '')
  const navPrev = `${idPrefix || 'pros'}-${uid}-prev`
  const navNext = `${idPrefix || 'pros'}-${uid}-next`

  const theme = useMemo(() => ({ ...defaultTheme, ...t }), [t])

  return (
    <section className={tw('w-full', sectionBgClass, className)}>
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center mt-16 w-full">
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <h3 className="text-center sm:text-left text-3xl sm:text-5xl font-bold mb-1 leading-tight flex items-center gap-3 justify-center sm:justify-start">
              <span className="bg-gradient-to-r from-teal-600 via-teal-400 to-teal-500 bg-clip-text text-transparent">
                {title}
              </span>

              {showPingDot && (
                <span className="relative inline-flex h-8 w-8">
                  <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" fill="currentColor" />
                  </svg>
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 text-green-600 animate-[ping_1.5s_ease-in-out_infinite]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="8" fill="currentColor" />
                  </svg>
                </span>
              )}
            </h3>

            {seeAllHref && (
              <Link
                href={seeAllHref}
                className="hidden sm:inline-flex shrink-0 text-teal-600 font-semibold hover:text-teal-800 transition text-lg"
              >
                See all
              </Link>
            )}
          </div>

          {/* Mobile button (separate row so it never overlaps the title) */}
          {seeAllHref && (
            <div className="sm:hidden">
              <Link
                href={seeAllHref}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 shadow-md active:scale-[0.99] transition"
              >
                See all
              </Link>
            </div>
          )}

          <div className={tw('w-40 h-1 mx-auto rounded-full bg-gradient-to-r', theme.underlineFrom, theme.underlineTo)} />

          {subTitle && (
            <p className="text-base sm:text-xl pb-3 text-slate-700 text-center max-w-5xl">
              {subTitle}
            </p>
          )}
        </div>

        {/* Slider */}
        <div className="relative mx-auto w-full">
          <button
            id={navPrev}
            aria-label="Previous"
            className="hidden sm:flex border border-gray-300 absolute top-1/2 -left-6 w-[42px] p-2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full text-gray-800 hover:text-teal-600 transition-colors z-20 hover:border-teal-600"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <button
            id={navNext}
            aria-label="Next"
            className="hidden sm:flex border border-gray-300 absolute top-1/2 -right-6 w-[42px] p-2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full text-gray-800 hover:text-teal-600 transition-colors z-20 hover:border-teal-600"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: `#${navPrev}`, nextEl: `#${navNext}` }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 1.6, spaceBetween: 18 },
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 3.2, spaceBetween: 22 },
              1024: { slidesPerView: 4.2, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="!pb-10"
          >
            {items.map((p) => (
              <SwiperSlide key={p.id}>
                <Card p={p} theme={theme} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

function Card({ p, theme }: { p: ProCard; theme: Required<Theme> }) {
  return (
    <div className="flex justify-center px-1 pb-5 pt-5">
      <div
        className={tw(
          'relative overflow-hidden bg-cover bg-center group rounded-xl border border-gray-300',
          'shadow-md hover:shadow-xl w-[19rem] sm:w-[22rem]'
        )}
        style={{ backgroundImage: `url("${p.imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-0 pointer-events-none" />
        <Link href={p.href} className="relative z-10 block px-4 py-4 sm:px-5 sm:py-5">
          <div className="mt-36 sm:mt-40">
            <div className="flex flex-col text-base sm:text-lg">
              <p className="uppercase flex flex-col sm:flex-row text-white group-hover:text-teal-500">
                <span className="font-bold truncate">{p.fullName.split(' ')[0]}</span>
                <span className="font-bold sm:ml-1 truncate">
                  {p.fullName.split(' ').slice(1).join(' ')}
                </span>
              </p>
              <p className="text-sm sm:text-base truncate capitalize text-white">{p.specialty}</p>
              {p.city && (
                <p className="text-xs sm:text-sm flex items-center pt-1 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="mr-1 min-w-[16px] text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="truncate">{p.city}</span>
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-white mt-3">
              <div className="text-sm sm:text-base">
                <span className="font-semibold">{p.price || '$0.00'}</span>
                <span className="text-white">{p.price?.includes('/') ? '' : '/visit*'}</span>
              </div>
              {(p.rating ?? 0) >= 0 && (
                <div className="text-xs sm:text-base flex items-center gap-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-yellow-400 fill-current">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638c-.53.52-.77 1.27-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0l-4.618 2.428a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" />
                  </svg>
                  <span className="font-medium">{(p.rating ?? 0).toFixed(1)}</span>
                  <span className="opacity-90">({p.ratingCount ?? 0})</span>
                </div>
              )}
            </div>

            <div className="mt-3">
              <button
                className={tw(
                  'w-full flex items-center justify-center gap-2 text-white py-2 px-4 rounded-lg transition-colors group-hover:shadow-md',
                  theme.buttonBg,
                  theme.buttonHover
                )}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Book Now</span>
              </button>
            </div>
          </div>
        </Link>

        <div
          className={tw(
            'absolute bottom-3 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-75 transition-transform duration-300 z-30',
            'bg-gradient-to-r',
            theme.barFrom,
            theme.barTo
          )}
        />
      </div>
    </div>
  )
}