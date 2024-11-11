import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import Waitlist from '@/components/Waitlist'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Waitlist />
        <Stats />
        <Team />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
