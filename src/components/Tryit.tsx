'use client'

import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
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

export default function Tryit() {
  const [enabled, setEnabled] = useState(true)
  const [countryCode, setCountryCode] = useState('+1')
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const addEmail = (event: any) => {
    event.preventDefault()
    // add email to Amplify data
    client.models.Todo.create({ content: event.target[0].value })
    setEnabled(false)
  }

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation()
    setDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  const handleCountrySelect = (countryCode: string) => {
    setCountryCode(countryCode)
    closeDropdown()
  }

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownMenu = document.getElementById('dropdownMenu')
      const dropdownButton = document.getElementById('dropdownButton')
      if (
        dropdownMenu &&
        dropdownButton &&
        !dropdownMenu.contains(event.target as Node) &&
        !dropdownButton.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <section id="waitlist">
      <div className="bg-white py-16 sm:py-24">
        <div className="lg:px-50 mx-auto max-w-3xl sm:px-6">
          <div className="relative isolate overflow-hidden bg-[#28317a] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Try it out!
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
              The AI will give you a call promptly at the number below
            </p>

            <form
              onSubmit={addEmail}
              className="mx-auto mt-10 flex max-w-sm flex-col gap-y-4"
            >
              {/* Phone Number Input with Dropdown */}
              <label htmlFor="phone-number" className="sr-only">
                Phone Number
              </label>
              <div className="relative mt-2">
                <div className="absolute left-0 top-2 flex items-center pl-3">
                  <button
                    id="dropdownButton"
                    onClick={toggleDropdown}
                    className="flex h-full items-center justify-center bg-transparent text-sm text-white focus:outline-none"
                  >
                    <span>{countryCode}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ml-1 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  <div className="ml-2 h-6 border-l border-slate-200"></div>
                  {isDropdownOpen && (
                    <div
                      id="dropdownMenu"
                      className="absolute left-0 z-10 mt-10 w-full min-w-[150px] rounded-md border border-slate-200 bg-white shadow-lg"
                    >
                      <ul id="dropdownOptions">
                        <li
                          className="cursor-pointer px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => handleCountrySelect('+1')}
                        >
                          USA (+1)
                        </li>

                        <li
                          className="cursor-pointer px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => handleCountrySelect('+33')}
                        >
                          France (+33)
                        </li>

                        <li
                          className="cursor-pointer px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => handleCountrySelect('+49')}
                        >
                          Germany (+49)
                        </li>

                        <li
                          className="cursor-pointer px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => handleCountrySelect('+34')}
                        >
                          Spain (+34)
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <input
                  id="phone-number-input"
                  type="tel"
                  className="ease w-full rounded-md border border-slate-200 bg-transparent py-2 pl-20 pr-3 text-sm text-white shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
                  placeholder="123-456-7890"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={12}
                  required
                />
              </div>

              {/* Email Input */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-gray-600"
                disabled={!enabled}
              >
                {enabled ? 'Call me!' : 'Calling'}
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
                  <stop stopColor="#219C90" />
                  <stop offset={1} stopColor="#219C90" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
