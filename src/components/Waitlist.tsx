'use client'

import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import React from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'
import { Amplify } from 'aws-amplify'
import outputs from '../../amplify_outputs.json'

Amplify.configure(outputs)
const client = generateClient<Schema>()

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

export default function Waitlist() {
  const addEmail = (event: any) => {
    event.preventDefault()
    // add email to Amplify data
    client.models.Todo.create({ content: event.target[0].value })
  }
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="lg:px-50 mx-auto max-w-7xl sm:px-6">
        <div className="relative isolate overflow-hidden bg-[#4C1F7A] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Want a free trial? Join our waitlist!
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
            We'll reach out with product updates, special perks, and early
            joiner free trials
          </p>
          <form
            onSubmit={addEmail}
            className="mx-auto mt-10 flex max-w-md gap-x-4"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#FF8000" />
                <stop offset={1} stopColor="#219B9D" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
