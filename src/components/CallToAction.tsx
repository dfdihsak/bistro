import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Get in contact with the team
          </h2>
          <p className="mt-4 text-lg tracking-tight text-black">
            Email: skyseerteam@gmail.com
          </p>
        </div>
      </Container>
    </section>
  )
}
