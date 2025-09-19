import Hero from './(site)/components/Hero'
import EliteIntro from './(site)/components/EliteIntro'
import ProsSliderSection from './(site)/components/ProsSliderSection'
import DynamicFeatureCarousel from './(site)/components/DynamicFeatureCarousel'
import ExpandNetworkSection from './(site)/components/ExpandNetworkSection'
import { featuredItems, beautyItems, physicalItems, availableData, blossendData, alternativeData } from './(site)/data/carousels'
import { Leaf, Sparkles, Stethoscope } from 'lucide-react'


export default function Home() {
    return (
        <>
            <Hero />
            <EliteIntro />
            <ProsSliderSection
                idPrefix="available"
                title="Available Now"
                subTitle="Find and book appointments with top professionals that are accepting clients right now!"
                seeAllHref="/pros"
                items={availableData}
                sectionBgClass="bg-transparent"
                theme={{
                    dotColor: 'text-emerald-500',
                    underlineFrom: 'from-teal-300',
                    underlineTo: 'to-teal-500',
                    buttonBg: 'bg-blue-600',
                    buttonHover: 'hover:bg-blue-700',
                    barFrom: 'from-blue-500',
                    barTo: 'to-cyan-500',
                }}
            />
            <DynamicFeatureCarousel
                id="Featured"
                bgClass="bg-gradient-to-r from-blue-50 via-white to-blue-100"
                accentHex="#2563eb"
                sectionIcon={<Sparkles className="w-16 h-16 text-green-600" />}
                heading="Featured"
                subheading="Discover highly-rated professionals ready to provide expert care, just a click away!"
                highlight="Join thousands of clients who trust our featured network."
                stats={[
                    { label: 'Featured Pros', value: '30+', valueClass: 'text-blue-600' },
                    { label: 'Wellness Experts', value: '100+', valueClass: 'text-green-600' },
                    { label: 'Clients Served', value: '15K+', valueClass: 'text-purple-600' },
                    { label: 'Satisfaction Rate', value: '98%', valueClass: 'text-red-600' },
                ]}
                items={featuredItems}
                cta={{
                    text: 'See All Featured Centers & Wellness Professionals',
                    href: '#',
                    from: 'teal-600',
                    to: 'blue-600',
                }}
            />
            <DynamicFeatureCarousel
                id="beauty"
                bgClass="bg-gradient-to-b from-[#EAF4FF] via-white to-[#E6F4F2]"
                accentHex="#10b981"
                sectionIcon={<Leaf className="w-16 h-16 text-emerald-600" />}
                heading={<>Mind & Body Wellness: IVs, Therapists & Mental Health Specialists, Holistic, Alternative & Spiritual Experts</>}
                subheading={<>Experience transformative healing and balance with Blossend's curated network of holistic and spiritual wellness experts.</>}
                highlight="Book holistic therapies, meditation, and spiritual guidance for mind and body wellness."
                stats={[
                    { label: 'Holistic Partners', value: '4+', valueClass: 'text-green-600' },
                    { label: 'Practitioners', value: '30+', valueClass: 'text-yellow-600' },
                    { label: 'Happy Clients', value: '800+', valueClass: 'text-blue-600' },
                    { label: 'Client Satisfaction', value: '98%', valueClass: 'text-green-600' },
                ]}
                items={beautyItems}
                cta={{
                    text: 'See All Beauty & Aesthetics Services',
                    href: '#',
                    from: 'teal-600',
                    to: 'blue-600',
                }}
            />
            <DynamicFeatureCarousel
                id="physical"
                bgClass="bg-gradient-to-r from-emerald-50 via-white to-emerald-100"
                accentHex="#10b981"
                sectionIcon={<Stethoscope className="w-16 h-16 text-emerald-600" />}
                heading={<>Physical Health, Sports Medicine & Rehabilitation: Chiros, Orthos, Physios, Spas, Massage Therapists & Body Workers</>}
                subheading={<>Expert care for injury prevention, treatment, and recovery with Blossend's network of certified physical health professionals.</>}
                highlight="Book comprehensive rehabilitation services alongside your wellness appointments."
                stats={[
                    { label: 'Health Partners', value: '5+', valueClass: 'text-green-600' },
                    { label: 'Healthcare Providers', value: '75+', valueClass: 'text-blue-600' },
                    { label: 'Patients Treated', value: '2K+', valueClass: 'text-green-600' },
                    { label: 'Recovery Success', value: '98%', valueClass: 'text-green-600' },
                ]}
                items={physicalItems}
                cta={{
                    text: 'See All Physical Health & Rehabilitation Services',
                    href: '#',
                    from: 'teal-600',
                    to: 'blue-600',
                }}
            />
            <DynamicFeatureCarousel
                id="beauty"
                bgClass="bg-gradient-to-b from-[#EAF4FF] via-white to-[#E6F4F2]"
                accentHex="#10b981"
                sectionIcon={<Leaf className="w-16 h-16 text-emerald-600" />}
                heading={<>Beauty & Aesthetics (Personal Care & Grooming): Nail Salons, Dental, Hair & Skin Care (Facials), Cosmetics:</>}
                subheading={<>Discover premium nail salons, cosmetics, hair care, and facial services through OpenMyPro's trusted beauty network.</>}
                highlight="Book beauty appointments instantly alongside your wellness services."
                announcement={{
                    badge: 'NEW PARTNERSHIP ANNOUNCEMENT',
                    title: 'Welcome Escape Nail Bar to Blossend!',
                    body: 'We’re thrilled to announce our partnership with Escape Nail Bar, bringing you premium beauty services integrated with your health and wellness journey.',
                    gradientClass: 'from-teal-600 to-blue-600',
                }}
                stats={[
                    { label: 'Salon Partners', value: '8+', valueClass: 'text-green-600' },
                    { label: 'Beauty Professionals', value: '75+', valueClass: 'text-yellow-600' },
                    { label: 'Happy Clients', value: '2K+', valueClass: 'text-bblue-600' },
                    { label: 'Client Satisfaction', value: '98%', valueClass: 'text-green-600' },
                ]}
                items={beautyItems}
                cta={{
                    text: 'See All Beauty & Aesthetics Services',
                    href: '#',
                    from: 'teal-600',
                    to: 'blue-600',
                }}
            />
            <ProsSliderSection
                idPrefix="blossend"
                title="New to Blossend"
                subTitle="Meet the latest professionals who recently joined OpenMyPro by Blossend!"
                seeAllHref="/pros"
                items={blossendData}
                sectionBgClass="bg-transparent"
                theme={{
                    dotColor: 'text-emerald-500',
                    underlineFrom: 'from-teal-300',
                    underlineTo: 'to-teal-500',
                    buttonBg: 'bg-blue-600',
                    buttonHover: 'hover:bg-blue-700',
                    barFrom: 'from-blue-500',
                    barTo: 'to-cyan-500',
                }}
            />
            <ProsSliderSection
                idPrefix="alternative"
                title="Alternative Blossend Pros"
                subTitle="Can’t find who you are looking for? Try these other Blossend options"
                seeAllHref="/pros"
                items={alternativeData}
                showPingDot={false}
                sectionBgClass="bg-transparent"
                theme={{
                    dotColor: 'text-emerald-500',
                    underlineFrom: 'from-teal-300',
                    underlineTo: 'to-teal-500',
                    buttonBg: 'bg-blue-600',
                    buttonHover: 'hover:bg-blue-700',
                    barFrom: 'from-blue-500',
                    barTo: 'to-cyan-500',
                }}
            />
            <ExpandNetworkSection />
        </>
    )
}
