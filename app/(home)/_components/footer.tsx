"use client"
import Link from 'next/link'


export const Footer = () => {
    return (
        <footer className=" flex shadow-t-md h-[200px] border-t-2 justify-center items-center p-10 mt-12 ">
            <div className='w-full max-w-[1500px] flex flex-col lg:flex-row md:flex-row justify-between  px-10 items-start gap-6 lg:items-center md:items-center py-8'>
                <div className='w-[375] flex flex-col gap-4 justify-start'>
                    <span className="flex-1 font-bold text-2xl  " >
                        <Link href="/" >
                            aBit
                        </Link>
                    </span>
                    <div>
                        <p>Change the way in which</p>
                        <p>Creators and fans interact</p>
                    </div>
                </div>
                <div className='w-[375]'>
                    <ul className='pl-4 border-l-2 border-[#9F9D9D] flex flex-col gap-4'>
                        <li>Home</li>
                        <li>Are you a Creator</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}