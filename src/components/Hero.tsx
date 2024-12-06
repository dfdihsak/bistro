'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/images/logos/logo.png'
import robot1 from '@/images/robot1.png'
import WIP from '@/components/WIP'

const navigation = [
  { name: 'How it Works', href: '#howitworks' },
  { name: 'Features', href: '#features' },
  { name: 'Team', href: '#team' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={logo.src} alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-10"
              
              >
                English
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                onClick={() => setModalOpen(true)}
              >
                中文
              </button>

              <button
                type="button"
                className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                onClick={() => setModalOpen(true)}
              >
                Español
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                onClick={() => setModalOpen(true)}
              >
                हिन्दी
              </button>
            </span>
          </div>
        </nav>
      </header>


      {/* WIP Modal */}
      {modalOpen && <WIP isOpen={modalOpen} onClose={() => setModalOpen(false)} />}

      
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
            The AI Phone Agent for Restaurants
          </h1>

          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Intelligent order assistant to help your restaurant manage
              incoming calls, reservations, and orders seamlessly. 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#waitlist"
                className="rounded-md bg-[#219B1D] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#54c550] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join the waitlist
              </a>
              <a
                href="#howitworks"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <img
            alt=""
            src={robot1.src}
            className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-5 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
    </div>
  )
}
