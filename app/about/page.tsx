
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Contact } from "lucide-react"

export default function Home() {

    return (
        <main>
            <section className='flex pt-20'>
                <div className="w-1/5 ml-5 flex place-items-center">
                    <img className="inline-block min-h-25 min-w-25 max-w-30 max-h-30 rounded-full ring-2 ring-white" src="/photo_2023-10-2720.03.34-2.jpeg" />                </div>
                <div className="p-6">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Lead:
                    </h1>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        LTA(NS) Jonathan
                    </h3>
                    <p className="flex text-sm text-muted-foreground"><Contact className="mr-2 h-4 w-4" />jonathanangml@gmail.com</p>
                    <p>
                        Hi there! I enlisted in Jan 2021 as part of the JC batch and ORD&apos;d at the end of 2022. When I enlisted, I was sent to mono-armour and thought that I would be in Armour Infantry for the rest of my NS.
                        Yet, after BMT, I was posted to OCS where I joined the Army Wing. <br />
                        In another dramatic change, I was then posted to the Air Force Wing while I was in OCS and ended up commissioning as an Air Force Officer.
                        It didn&apos;t stop there! After commissioning I was posted to an Air Force Battalion as a Logistics Officer...There were many changes in my journey and I&apos;m confident my experience will be valuable to parents and enlistees who want understand the many paths their NS journey can take.
                    </p>
                </div>

            </section>

        </main>
    )
}