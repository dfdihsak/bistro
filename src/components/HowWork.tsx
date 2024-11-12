import Image from 'next/image'

import { Container } from '@/components/Container2'

import person1 from '@/images/person1.png'
import robot2 from '@/images/robot2.png'
import person2 from '@/images/person2.png'
import robot3 from '@/images/robot3.png'

const resources = [
  {
    title: '1. Customer Call',
    description:
      'A customer calls your restaurant with an order or reservation request',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Image src={person1} alt="" unoptimized /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
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
        // <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Image src={robot2} alt="" unoptimized /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
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
          {/* <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={person2}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
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
        // <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Image src={robot3} alt="" unoptimized /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
            />
          </svg>
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
      <Container>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          How Bistro IQ works
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Bistro IQ helps your capture every opportuity for revenue - even when
          you're busy!
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              {/* <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40"> */}
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
      </Container>
    </section>
  )
}
