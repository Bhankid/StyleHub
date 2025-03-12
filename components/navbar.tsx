"use client"

import { useState } from "react"
import Link from "next/link"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8" />
              <span className="text-xl font-bold">StyleHub</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/services">
                <Button variant="ghost">Services</Button>
              </Link>
              <Link href="/appointments">
                <Button variant="ghost">Book Now</Button>
              </Link>
              <Link href="/gallery">
                <Button variant="ghost">Gallery</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/signin">
                <Button>Sign In</Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}