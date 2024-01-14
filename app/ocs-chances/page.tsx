import type { Metadata } from 'next'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import { CalendarDays, Contact } from 'lucide-react'
import { Button } from '@/components/ui/button'

const invoices = [
    {
        batch: "127/22",
        month: "December",
        number: "407 graduates",
    },
    {
        batch: "126/22",
        month: "September",
        number: "203 graduates",
    },
    {
        batch: "125/22",
        month: "June",
        number: "417 graduates",
    },
    {
        batch: "124/22",
        month: "March",
        number: "215 graduates",
    },
]


export const metadata: Metadata = {
    title: 'How hard is it to get into OCS?',
    description: 'Discover how selective and prestigious OCS is and what your chances of getting in is during your National Service in Singapore',
}


export default function Home() {

    return (
        <main className='grid place-items-center'>
            <h1 className="scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
                How hard is it to get into Command School?
            </h1>
            <div className='flex pb-10'>
                <Contact className="mr-1 h-4 w-4" /><Link href="/about"><p className="text-sm text-muted-foreground hover:font-bold">Written by LTA(NS) Jonathan</p></Link>
                <CalendarDays className="ml-4 mr-1 h-4 w-4" /><p className="text-sm text-muted-foreground">04 Nov 2023</p>
            </div>

            <p> Many NSFs want to know <a className='text-primary'>how many people get into OCS.</a> Here we will breakdown the number to give a rough estimation of the percentage of NSFs who make it there.</p>
            <p>
                Let&apos;s first calculate the total number of new NSF Officers each year.
            </p>
            <p>We will use 2022, the latest full year of officer graduations. Data is taken from mindef.gov
            </p>
            <div className='place-self-center py-20'>
                <Table>
                    <TableCaption>OCS graduates in 2022</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">OCS batch</TableHead>
                            <TableHead>Month</TableHead>
                            <TableHead className="text-right">Number of graduates</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.batch}>
                                <TableCell className="font-medium">{invoice.batch}</TableCell>
                                <TableCell>{invoice.month}</TableCell>
                                <TableCell className="text-right">{invoice.number}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='sm:w-1/2'>
                Adding all those numbers up, the total number of officer graduates stands at 1242. However, this includes officers who are regulars. While they also have a selection process, they do not have the same criterias as that of NSFs. Since they are out of this scope, we will take them out.
                <br /> Let&apos;s set the number of regulars to be 1/5 of the total number of OCS graduates. This is because, the Air and MIDs Wings are close to about 50% regulars while the DIS Wing is 100% regulars. Army wings should be about less than 10% regulars.
                <br /> <a className="underline decoration-primary decoration-3 hover:decoration-4">So the Total NSF OCS graduates is 994.</a>
                <br /><br /> Now we have to find the total number of NSFs
                <br /> According to Dr Eng En Han’s statement here: around 10% of NSF cohort are new citizens, which number 3400. So the NSF cohort each year is 34000.
                <br></br>Lets ball park scdf and spf to be 20% of the total NSFs so <a className="underline decoration-primary decoration-3 hover:decoration-4">the number of SAF NSFs stands at 27200.</a>
            </p>
            <h2 className="py-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                To get into OCS, you have to be the top 994/27200, the top <a className='text-primary'>3.66%</a>
            </h2>
            <div className='flex items-center py-5'>
                <p>Find out how you can prepare youself to get be that top 3.66%</p>
                <Button className='ml-2 font-bold'><a href='/ocs-guide' className=''>here</a></Button>
            </div>





        </main>
    )
}
