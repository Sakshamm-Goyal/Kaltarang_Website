"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "../assets/kaltarang_logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    {/* Logo */}
    <img
      src={Logo}
      alt="Kaltarang Logo"
      className={`transition-all duration-300 ${
        scrolled ? "h-12" : "h-20"
      } w-auto`}
    />

    {/* Desktop Menu */}
    <ul className="hidden md:flex font-pixelon space-x-6 font-medium uppercase tracking-wide text-xl">
      <li>
        <a href="#events" className={`hover:underline ${scrolled ? "text-black" : "text-black"}`}>
          [Events]
        </a>
      </li>
      <li>
        <a href="#competition" className={`hover:underline ${scrolled ? "text-black" : "text-black"}`}>
          [Competition]
        </a>
      </li>
      <li>
        <a href="#team" className={`hover:underline ${scrolled ? "text-black" : "text-black"}`}>
          [Team]
        </a>
      </li>
      <li>
        <a href="#sponsors" className={`hover:underline ${scrolled ? "text-black" : "text-black"}`}>
          [Sponsors]
        </a>
      </li>
    </ul>

    {/* Mobile Menu Button */}
    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {isOpen && (
    <ul className="md:hidden absolute top-16 left-0 w-full font-pixelon bg-white shadow-lg text-black text-center uppercase p-4 space-y-4">
      <li>
        <a href="#events" onClick={() => setIsOpen(false)} >
          Events
        </a>
      </li>
      <li>
        <a href="#competition" onClick={() => setIsOpen(false)}>
          Competition
        </a>
      </li>
      <li>
        <a href="#team" onClick={() => setIsOpen(false)}>
          Team
        </a>
      </li>
      <li>
        <a href="#sponsors" onClick={() => setIsOpen(false)}>
          Sponsors
        </a>
      </li>
    </ul>
  )}
</nav>

  )
}

export default Navbar

