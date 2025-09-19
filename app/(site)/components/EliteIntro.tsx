import { Sparkles } from 'lucide-react'

export default function EliteIntro() {
  return (
    <section className="w-full mt-4 pt-4">
      <div className="mx-auto max-w-full sm:max-w-7xl w-full">
        <div className="text-center mb-20 sm:mb-32">
          <div className="inline-flex items-center px-8 sm:px-12 py-3 sm:py-4
                          bg-gradient-to-r from-teal-100 via-blue-100 to-teal-100
                          backdrop-blur-xl rounded-full text-base font-bold
                          text-cyan-800 mb-10 shadow-lg border border-cyan-300/50">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 mr-4 text-teal-500 animate-pulse" />
            Elite Wellness Network
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 ml-4 text-teal-500 animate-pulse" />
          </div>

          {/* heading */}
          <h2 className="text-4xl sm:text-8xl font-bold mb-12 leading-tight">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-300 to-teal-600 bg-clip-text text-transparent">
              Elite
            </span>{' '}
            Pros
          </h2>

          {/* sub text */}
          <p className="text-xl sm:text-2xl text-slate-700 max-w-5xl mx-auto leading-relaxed">
            Connect with world-class professionals who combine cutting-edge expertise with
            compassionate care, handpicked for their excellence in client outcomes and
            innovative care solutions.
          </p>
        </div>
      </div>
    </section>
  )
}