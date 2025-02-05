import Link from "next/link"
import "../app/globals.css"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Navbar Practice",
  description: "A simple Next.js app with a navbar",
}

type NavLink = {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Docs" },
  { href: "/contact", label: "Contact" }
]

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="text-white hover:text-gray-400">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar