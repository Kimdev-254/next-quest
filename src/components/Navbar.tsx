import Link from "next/link"
import "../app/globals.css"

import { Inter } from "next/font/google"
import { link } from "fs"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Navbar Practice",
  description: "A simple Next.js app with a navbar",
}

const links = [
  {href: "/", label: "Home"},
  {href: "/about", label: "Docs"},
  {href: "/contact", label:"Contact"}
]

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center">
          {links.map(link => {
            return (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar