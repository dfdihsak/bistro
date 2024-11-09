import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Is this cheaper and better than human or answering service?",
    answer:
      "Bistro IQ surpasses traditional answering services by delivering superior, AI-driven customer interactions at a quarter of the cost. Operating 24/7, it provides consistent, high-quality service, including handling complex queries and learning from each interaction to improve over time. Unlike variable human services, Loman.ai ensures reliability and precision in every call. It's not just more affordable; it's a smarter, more efficient solution, offering scalability and enhanced customer experience that traditional services can't match.",
  },

  {
    question: "Does Bistro IQ get orders right?",
    answer:
      "Loman.ai surpasses traditional answering services by delivering superior, AI-driven customer interactions at a quarter of the cost. Operating 24/7, it provides consistent, high-quality service, including handling complex queries and learning from each interaction to improve over time. Unlike variable human services, Loman.ai ensures reliability and precision in every call. It's not just more affordable; it's a smarter, more efficient solution, offering scalability and enhanced customer experience that traditional services can't match.",
  },

  {
    question: "Does Bistro IQ record calls?",
    answer:
      "Conversations can be recorded for quality and training purposes, with full transparency and consent in line with privacy laws. You have control over this feature and can opt in or out according to your business needs.",
  },


  // More questions...
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
