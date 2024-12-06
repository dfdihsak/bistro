import Image from 'next/image'
import { Container2 } from '@/components/Container'

import step1 from '@/images/step1.png'
import step2 from '@/images/step2.png'
import step3 from '@/images/step3.png'
import step4 from '@/images/step4.png'


const resources = [
  {
    title: '1. Customer Call',
    description:
      'A customer calls your restaurant with an order or reservation request',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
        
            <img alt="" src={step1.src} className="aspect-[4/3] sm:aspect-[3/2] w-full rounded-2xl object-cover" />

         
        </div>
      )
    },
  },
  {
    title: '2. Bistro IQ answers',
    description:
      'Our AI-powered agent picks up, ensuring a friendly, professional response every time',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <img alt="" src={step2.src} className="aspect-[4/3] sm:aspect-[3/2] w-full rounded-2xl object-cover" />

        </div>
      )
    },
  },
  {
    title: '3. Engaging conversations',
    description:
      'Bistro IT chats with the customer, confirms details, and captures the order!',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <img alt="" src={step3.src} className="aspect-[4/3] sm:aspect-[3/2] w-full rounded-2xl object-cover" />

        </div>
      )
    },
  },
  {
    title: '4. Integration with POS',
    description:
      'We seamlessly relay orders and reservations into your system, alerting your human team!',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <img alt="" src={step4.src} className="aspect-[4/3] sm:aspect-[3/2] w-full rounded-2xl object-cover" />

        </div>
      )
    },
  },
]

export function HowWork() {
  return (
    <section
      id="howitworks"
      aria-labelledby="resources-title"
      className="lg:py-17 scroll-mt-14 py-10 sm:scroll-mt-32 sm:py-20"
    >
      <Container2>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          How Bistro IQ works
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Bistro IQ helps your capture every opportunity for revenue - even when
          you're busy!
        </p>
      </Container2>
      <Container2 size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols- sm:gap-y-10 lg:grid-cols-1 xl:px-12 sm:max-w-[20rem] mx-auto"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container2>
    </section>
  )
}
