import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import logo from '@/images/logos/logo.png'

export function Footer() {
  return (
    <footer className="bg-[#ffba4a]">
      <Container>
        <div className="py-16">
        <Link href="#" aria-label="Home">
              <img src={logo.src} alt="Logo" className="mx-auto h-10 w-auto" />
            </Link>

          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6 text-white">
              <NavLink href="#howitworks">How it Works</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#team"> Team</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">

          <p className="mt-6 text-sm text-white sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Bistro IQ. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
