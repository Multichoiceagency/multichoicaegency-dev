"use client"

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/theme-switcher'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, Phone, Search, ArrowRight } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      {/* Top bar - only shown when not scrolled */}
      {!isScrolled && (
        <div className="hidden border-b border-white/10 md:block">
          <div className="mx-auto flex h-10 max-w-[1800px] items-center justify-between px-10">
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="tel:+31882013101" 
                className="flex items-center gap-2 text-white hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +31 882 013 101
              </Link>
              <Link 
                href="mailto:business@multichoiceagency.com" 
                className="flex items-center gap-2 text-white hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                business@multichoiceagency.com
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/rfp" 
                className="text-sm text-white hover:text-primary"
              >
                RFP/RFI Insturen
              </Link>
              <Select defaultValue="nl">
                <SelectTrigger className="h-8 w-[70px] border-0 bg-transparent text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nl">NL</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="de">DE</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <div className={`border-b transition-all ${isScrolled ? 'border-border' : 'border-white/10'}`}>
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-10">
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Multichoiceagency
          </Link>

          <div className={`flex items-center gap-8 ${isScrolled ? 'ml-auto mr-8' : ''}`}>
            <NavigationMenu isScrolled={isScrolled} />
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-foreground/10' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeSwitcher isScrolled={isScrolled} />
            <Button className="group gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Contact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

function NavigationMenu({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      <div className="group relative">
        <Link 
          href="/wat-we-doen"
          className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors ${
            isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
          }`}
        >
          Wat we doen
          <ArrowRight className="h-4 w-4 rotate-90 transition-transform group-hover:rotate-0" />
        </Link>
        <div className="invisible absolute left-0 top-full w-[800px] translate-y-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-lg bg-background p-6 shadow-lg">
            <div className="flex gap-6">
              <div className="w-2/3 space-y-1">
                <NavigationLink href="/wat-we-doen/diensten/brand-business-experience-design" text="Brand, Business & Experience Design" />
                <NavigationLink href="/wat-we-doen/diensten/digital-platforms" text="Digital Platforms" />
                <NavigationLink href="/wat-we-doen/diensten/marketing-programs-campaigns" text="Marketing Programs & Campaigns" />
                <NavigationLink href="/wat-we-doen/diensten/creation-content-production" text="Creation & Content Production" />
                <NavigationLink href="/wat-we-doen/diensten/cloud-data-integration" text="Cloud, Data & Integration" />
                <NavigationLink href="/wat-we-doen/diensten/transformation-consulting" text="Transformation & Consulting" />
              </div>
              <div className="w-1/3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60"
                    alt="Digital Services"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Digital Excellence</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Transform je business met onze complete digitale oplossingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link 
        href="/cases" 
        className={`text-sm font-medium uppercase tracking-wide transition-colors ${
          isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
        }`}
      >
        Cases
      </Link>

      <Link 
        href="/carriere" 
        className={`text-sm font-medium uppercase tracking-wide transition-colors ${
          isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
        }`}
      >
        Carrière
      </Link>

      <Link 
        href="/insights" 
        className={`text-sm font-medium uppercase tracking-wide transition-colors ${
          isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
        }`}
      >
        Insights
      </Link>

      <Link 
        href="/over-ons" 
        className={`text-sm font-medium uppercase tracking-wide transition-colors ${
          isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
        }`}
      >
        Over ons
      </Link>
    </>
  )
}

function NavigationLink({ href, text }: { href: string; text: string }) {
  return (
    <Link 
      href={href} 
      className="group flex items-center justify-between rounded-lg p-3 text-foreground transition-colors hover:bg-muted"
    >
      {text}
      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  )
}