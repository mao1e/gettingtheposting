import { Button } from '@/components/ui/button'
import { CalendarDays, Contact, Link2 } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'How to get into OCS? - The definitive guide',
    description: 'Learn what the selection criteria for OCS is and how to be chosen/selected for Command School during National Service in Singapore',
}


export default function Home() {

    return (
        <main>
            <h1 className="scroll-m-20 p-10 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
                How to get into OCS? - the definitive guide
            </h1>
            <div className='flex px-10 pb-10'>
                <Contact className="mr-1 h-4 w-4" /><Link href="/about"><p className="text-sm text-muted-foreground hover:font-bold">Written by LTA(NS) Jonathan</p></Link>
                <CalendarDays className="ml-4 mr-1 h-4 w-4" /><p className="text-sm text-muted-foreground">04 Nov 2023</p>
            </div>
            <p className='px-10'>Many NSFs want to know what is the criteria for getting into OCS. Nobody tells you directly, not even your commanders which makes it seem rather mysterious. Many people, be it BMT mates/parents/relatives speculate greatly on the requirements of getting into OCS. This guide could help to give some insight and put down some of these speculations.
                <br /><br /> To give you <a className='text-primary font-bold'>3 essential tips for getting into Command School</a>, I will go along the thread of the OCS motto: To lead, to excel, to overcome.
            </p>

            <h2 className="scroll-m-20 p-10 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                1. Be a leader
            </h2>
            <p className='px-10'>
                Being a leader doesn’t mean being a wayang king and sucking up to your PS and PC. Being a leader also doesn’t mean ordering others around. <a className="underline decoration-primary decoration-3 hover:decoration-4">Being a leader is not the same as appearing as one.</a>
                <br /><br />
                Many people come with the idea that standing out is the most important thing to becoming selected for OCS. Yes, statistically, you are more likely to get into OCS if you were Company Best or Platoon Best. But then again, not being Company Best or Platoon Best doesn’t mean you will not get into OCS. The competition to be Platoon IC is intense. Yet, even if you became the platoon ic but pissed off the whole platoon while you were at it, its still a net loss. Being an IC is good and shows leadership potential but also scoring badly on the peer review shows bad leadership potential.
                <br /><br />
                First, be a team player. Always help and support your section mates. Nobody likes a selfish team mate let alone a leader. It is very obvious who those people are.
                <br />Next, take initiative. Don’t wait for things to happen, think steps ahead and prepare for it. Being prepared is the bread and butter of military life. It doesn’t mean doing grand things. It can be the little things like helping your section mates refill their bottles.
            </p>
            <section className='flex-row sm:flex'>
                <div className='p-10 xl:w-4/5'>
                    <img src='afif-ramdhasuma-jl4BQJs87Do-unsplash.jpg' />
                </div>
                <div className='p-10'>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        2. Ace every single test given to you
                    </h2>
                    <p>
                        One thing to realise is that every single thing you do in BMT has a meaning. If SAF doesn’t care about fitness, they would have removed IPPT and other PT conducts long ago. After all, nobody has the time to do meaningless things, not even regulars. If you ask: Does peer review/ippt/BTP/fieldcamp attendance/whatever affect your chances of going into OCS?
                        The simple answer is that every metric is tracked by SAF so most likely yes…But of course the long answer is that it depends. Reach out to me if you have any unique circumstances.
                        <br />But in general, for SIT test or the fire movement and CQB tests, all of your soldier fundamentals(SOFUN) are important. If you can’t do basic fire movement, how will you be trusted to do section and platoon level fire movements in the future? In everything you do, do it to the best of your ability.
                        <br /><br /> Don’t just work hard but work smart too. ELISS is straight up ridiculous sometimes. Even if you can do 60 pushups but your form is shit, you won’t be able to get full score on it. So you MUST learn how to hack ELISS. Pushups/situps is always easier to improve compared to running. It is not so much about talent as it is about your mind getting used to the pain and being able to squeeze out more each time you exercise. Everyday, no matter if there was SOC/PT/whatever I would always do 2 sets of max rep sit ups and pushups. I went from pass to Gold by OCS.

                    </p>
                </div>

            </section>
            <h2 className="scroll-m-20 p-10 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                3. Overcome challenges
            </h2>
            <p className='px-10 mb-10'>
                I don’t think anyone is the perfect OCS candidate. No one has a guaranteed spot to get into OCS unless your a white horse haha. Each of us will have our own weaknesses and challenges. It could be on your first ippt when you only scored a pass or during field camp when you would much rather sit down than help your section/sergeant unload jerry cans. It could even be learning to forgive your blur buddy when he brought a lot of tekan on you. I’m sure there will tough moments for everyone. If you want to be an Officer, find the courage and strength within you to overcome them.
            </p>
            <div className='flex items-center m-10 justify-self-center'>
                <p>Find out more about The Uniform Path</p>
                <Button className='ml-2 font-bold '><a href='/' className='mr'>here </a></Button>
            </div>


        </main>

    )
}
