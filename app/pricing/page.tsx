import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          One Standard, one Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get all your questions about NS answered and <a className="underline decoration-primary decoration-3 hover:decoration-4">discern the truth from what relatives or other parents have told you.</a>
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> 1:1 Support
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Long-term Coaching
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Insider Information
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Gain an advantage over peers
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Big-Picture, First-hand insight
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Guest speakers from your desired vocation
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$-</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Hourly
            </p>
          </div>
          <Link href="https://forms.gle/sAByTe1LdEta4iGA8" target="_blank" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          First Consultation is free-of-charge.{" "}
          <strong>Schedule a meeting with no strings attached!</strong>
        </p>
      </div>
    </section>
  )
}
