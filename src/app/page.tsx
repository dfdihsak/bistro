import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import Waitlist from '@/components/Waitlist'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import { HowWork } from '@/components/HowWork'
import About from '@/components/About'
import BentoGrid from '@/components/BentoGrid'
import About2 from '@/components/About2'
import About3 from '@/components/About3'
import Test from '@/components/test'

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <HowWork />
        <Waitlist />

        <About />
        <About2 />
        <About3 />

        {/* <Stats /> */}

        <BentoGrid />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
