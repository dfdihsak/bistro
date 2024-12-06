import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import Waitlist from '@/components/Waitlist'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Stats from '@/components/Stats'
import { HowWork } from '@/components/HowWork'
import About from '@/components/About'
import BentoGrid from '@/components/BentoGrid'
import Quote1 from '@/components/Quote1'
import Quote2 from '@/components/Quote2'

import Tryit from '@/components/Tryit'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        

        <HowWork />
        <Tryit />


        <About />
        <Waitlist />

        <Quote1 />
        <Quote2 />

        

        <Team />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
