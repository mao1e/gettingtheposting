import Image from 'next/image'
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { cn } from "@/lib/utils"
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
import { pages } from 'next/dist/build/templates/app-page'
import { Main } from 'next/document'
import { Footprints, Search } from 'lucide-react'

export default function Home() {

  return (
    <main className='grid place-items-center h-screen'>
      <section className='px-7 py-80'>
        <div className='flex'>
          <Footprints className='ml-2 h-10 w-10 lg:h-20 lg:w-20' />
          <h1 className="pl-2 scroll-m-20 text-4xl justify-left font-extrabold tracking-tight lg:text-7xl">
            <a className="underline decoration-primary decoration-4 hover:decoration-8">The Uniform Path</a>
          </h1>

        </div>

        <h4 className="scroll-m-20 mt-5 text-xl font-semibold tracking-tight">
          One path binds every Singaporean son from all walks of life to a uniform point: 2 years in National Service. <br />
          One path sees every boy change his clothing of choice to the green SAF Uniform. <br />
          Yet, each person&apos;s path is unique and un-uniform. To some, it is an extraordinary journey. <br />
          <a className="text-primary">How do you want your path to turn out?</a>
        </h4>

      </section>
      <section className='flex flex-col sm:flex-row pt-20'>
        <div className='sm:w-2/5'>
          <h1 className="pl-2 scroll-m-20 text-4xl justify-left font-extrabold tracking-tight lg:text-5xl">
            Vocation
          </h1>
          <h4 className="pl-6 scroll-m-20 text-muted-foreground text-xl font-semibold tracking-tight">
            /vōˈkāSH(ə)n/ Noun
          </h4>
          <blockquote className="pl-10 text-primary hover:text-sky-600 w-4/5 mt-6 border-l-2 pl-6 italic">
            a type of work that you feel you are suited to doing and to which you should give all your time and energy, or the feeling that a type of work suits you in this way
            <br></br>- Marriam Webster
          </blockquote>
          <p className="pt-6 pl-6 pr-4">Every NSF has a vocation of their own. Commonly abbreviated with acronyms like ASA, SA-GE, TPT-OPR, INF-TPR, there are perhaps a thousand different vocations. Yet, not everyone can relate to the meaning of &apos;vocation&apos;. It is a fact that for almost every single NSF, they cannot choose their vocation. But that doesn&apos;t mean you have no control over your future. Here, we help you in understanding and
            <a className="underline decoration-primary decoration-3 hover:decoration-4"> getting your desired posting</a> </p>
        </div>
        <div className='sm:h-4/5 p-6 sm:w-3/5 order-first sm:order-last'>
          <img src='/25299751_10155763659476063_3318136632110961246_o.jpeg' alt='what' />
          <p className="text-sm text-muted-foreground">Image taken from SAF Facebook page</p>
        </div>
      </section>
      <section className='px-7 pt-60'>
        <div className='flex items-center'>
          <Search className='h-10 w-10' />
          <h2 className="scroll-m-20 ml-2 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Looking on Google/Reddit to find advice on the best posting?
          </h2>
        </div>

        <h4 className="scroll-m-20 mt-5 text-xl font-semibold tracking-tight">
          How to get posted to Air Force? <br />
          How to get posted to Commandos? <br />
          How to get posted to Storeman? <br />
          How to get posted to Combat Medic? <br />
          How to get posted to Command School? <br />
          <a className="underline decoration-primary decoration-3 hover:decoration-4">How to get into OCS?</a>
        </h4>

      </section>
      <section className='flex flex-col sm:flex-row pt-60 w-full'>
        <div className='sm:w-1/2 p-8'>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            If you are:
          </h2>
          <Card className='p-8 object-center'>
            <ul className="list-inside list-disc">
              <li>Curious on <a className="underline decoration-primary decoration-3 hover:decoration-4"> what postings there are</a> and what you are likely to get into</li>
              <li>Want to <a className='font-bold hover:italic'> know more </a>about the different phases of NSF life, from BMT to Unit</li>
              <li>Driven to <a className='font-bold hover:italic'> make the most </a> out of your 2 years and achieve your goals</li>
              <li>Want to know who gets <a className="underline decoration-primary decoration-3 hover:decoration-4">selected</a> for command school and why</li>
              <li>Hope to gain a head start in understanding the military regimentation</li>
            </ul>
          </Card>
        </div>
        <div className='sm:w-1/2 p-8'>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Where we can help you:
          </h2>
          <Card className='p-8 object-center'>
            <ul className="list-inside list-disc">
              <li>Get questions answered from those who were in the <a className="underline decoration-primary decoration-3 hover:decoration-4">same position as you</a></li>
              <li>Gain insight into what makes a <a className='font-bold hover:italic'> meaningful NSF journey </a> whether it be an upz vocation or not, a leader or a man</li>
              <li><a className="underline decoration-primary decoration-3 hover:decoration-4">Long term plans</a> to optimise chances of getting into the posting of your choice</li>
            </ul>
          </Card>
        </div>
      </section>
      <div className='mb-10'>
        <Button className='rounded-full'>
          <a href="https://forms.gle/sAByTe1LdEta4iGA8" target="_blank">Get started with a free Consultation </a>
        </Button>
      </div>

    </main>
  )
}
