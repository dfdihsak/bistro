import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const faqs = [
  {
    question: "How does the AI learn our menu?",
    answer:
      "We set up our AI with your full menu, including item names, descriptions, and modifiers like sizes or customization options. Any updates - such as seasonal items or price changes - can be easily added to ensure that the AI always provides accurate, up-to-date information",
  },

  {
    question: "Will the AI inform customers about special hours or holiday closures?",
    answer:
      "Absolutely! You can easily update the AI with special hours, holiday closures, or unique events. It will relay this information to customers automatically. This way, customers are always kept in the loop about when they can visit",
  },

  {
    question: "Can the AI speak multiple languages?",
    answer:
      "Yes! Our AI is designed to serve a diverse customer base by supporting multiple languages. It can detect the language a customer is speaking and seamlessly switch to that language to ensure clear and effective communication. We can set up the AI with your preferred language, helping your restaurant create a welcoming atmosphere for anyone. Currently, our platform supports English, Mandarin, Spanish, and Hindi.",

  },

  {
    question: "How long does it take to set up?",
    answer:
      "Setup is quick and easy. Most restaurants are up and running in 1 business day. Our support team will walk you through each step.",
  },


  {
    question: "Can the AI handle customer complaints?",
    answer:
      "Bistro IQ responds to customer complaints professionally, with top-tier customer service. If necessary, the AI is trained to escalate conversations to a human working at the restaurant. Bistro IQ is equipped with advanced natural language processing, allowing it to recognize and respond to a range of customer concerns, from incorrect orders to feedback on service. If a customer expresses dissatisfaction, the AI can provide a polite acknowledgement attempt to resolve simple issues, and escalate more copmlex complaints to your human team. This approach ensures that customers feel heard while allowing your staff to focus on in-person services",
  },


  {
    question: "Will your system protect our customers' information?",
    answer:
      "We take data privacy seriously. Our platform uses industry-standardd security protocols to keep customer information secure and complies with all data protection regulations",
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
