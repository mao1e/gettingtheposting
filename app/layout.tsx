import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from '@/components/ui/modetoggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Contact, Footprints, Info } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Uniform Path',
  description: 'NS Coaching Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='grid'>
            <NavigationMenu className='my-5 object-top flex place-self-center'>
              <NavigationMenuList className='my-5 flex'>
                <NavigationMenuItem>
                  <ModeToggle></ModeToggle>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref >
                    <NavigationMenuLink className="sm:px-5 px-2 hover:text-primary">
                      <div className='flex items-center'>
                        <Footprints className='mr-1' />Home
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <div className='flex items-center'>
                      <Info className='mr-1' />
                      OCS Guide
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/ocs-chances"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium place-self-auto">
                              How hard is it to get into OCS?
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Discover how selective and prestigious OCS is and what your chances of getting in is
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/ocs-guide"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              How to get into OCS? - The definitive guide
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Learn what the selection criteria for OCS is and how to be chosen/selected for Command School
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="sm:px-5 px-2 hover:text-primary">
                      <div className='flex items-center'>
                        <Contact className='mr-1' />
                        About
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="sm:px-5 px-2 hover:text-primary">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className='rounded-full'>
                    <a href="https://forms.gle/sAByTe1LdEta4iGA8" target="_blank">Free Consultation</a>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
