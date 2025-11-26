import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Home', section: 'home' },
  { name: 'Device', section: 'device-showcase' },
  { name: 'Features', section: 'bento-features' },
  { name: 'How It Works', section: 'how-it-works' },
  { name: 'App', section: 'app-features' },
  { name: 'Dr. HausPet', section: 'chat-section' },
  { name: 'Early Access', section: 'early-access' },
]

export default function AppleNav() {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section) => {
    setMenuState(false)
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className="fixed z-50 w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-black/50 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo */}
            <div className="flex w-full justify-between lg:w-auto">
              <button
                onClick={() => scrollToSection('home')}
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img
                  src="/images/hauspet-logo.png"
                  alt="HausPet Icon"
                  className="h-10 w-10 object-contain"
                />
                <img
                  src="/images/hauspet-logo-text.png"
                  alt="HausPet"
                  className="h-6 w-auto object-contain hidden sm:block"
                />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    'm-auto size-6 text-white duration-200',
                    menuState && 'rotate-180 scale-0 opacity-0'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 m-auto size-6 text-white -rotate-180 scale-0 opacity-0 duration-200',
                    menuState && 'rotate-0 scale-100 opacity-100'
                  )}
                />
              </button>
            </div>

            {/* Desktop Nav Links - Center */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="text-white/60 hover:text-white block duration-150"
                    >
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu & Desktop Buttons */}
            <div
              className={cn(
                'bg-zinc-900/95 backdrop-blur-lg mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none',
                menuState && 'block'
              )}
            >
              {/* Mobile Nav Links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.section)}
                        className="text-white/60 hover:text-white block duration-150"
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    'border-white/20 text-white hover:bg-white/10',
                    isScrolled && 'lg:hidden'
                  )}
                  onClick={() => scrollToSection('chat-section')}
                >
                  <span>Try AI</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    'bg-white text-black hover:bg-white/90',
                    isScrolled && 'lg:hidden'
                  )}
                  onClick={() => scrollToSection('early-access')}
                >
                  <span>Early Access</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    'bg-white text-black hover:bg-white/90 hidden',
                    isScrolled && 'lg:inline-flex'
                  )}
                  onClick={() => scrollToSection('early-access')}
                >
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
