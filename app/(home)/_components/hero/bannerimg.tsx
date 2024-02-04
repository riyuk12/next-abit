"use client"
import Image from 'next/image'
interface bannerimgProps{
    banner:string;
    stretch:string;
    card:{name:string,bio:string,avatar:string,handle:string}
}
export const Bannerimg=({banner,stretch,card}:bannerimgProps)=>{
    return(
        <div className=" w-full  flex flex-col items-start "  >
            <div className='relative h-[600px] w-full z-0'>
                <Image src={banner} alt="banner" fill objectFit='cover'  />
            </div>
            <div className='relative h-[50px] w-full z-10 overflow-hidden px-auto py-auto'>
                <img src={stretch} alt="band" className='h-[150px] w-[2000px] min-w-[2000px] transform -translate-y-[25%]' />
            </div>
            <div className='relative top-[-100px] left-0 lg:left-12 md:left-12 z-20 '>
                <div className='h-[200px] w-auto flex flex-col lg:flex-row md:flex-row rounded-2xl overflow-hidden'>
                    <div className='relative h-[200px] w-[200px]'>
                            <Image src={card.avatar} alt={card.name} fill objectFit='cover' />
                    </div>
                    <div className='min-w-[300px] max-w-[400px] bg-slate-200 flex flex-col gap-3 justify-center items-center p-4 pr-5'>
                        
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-2xl font-semibold'>{card.name}</span>
                                <span className='text-xl text-gray-500'>{card.handle}</span>
                            </div>
                            <div className='flex flex-col justify-between items-start w-full'>
                                <span className='text-md font-semibold text-gray-500'>Bio</span>
                                <span className='text-md text-gray-500'>{card.bio}</span>
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <div className='w-full h-[40px] rounded border-gray-700 border-2 bg-gray-700'>
                                    <div className=' h-[36px] w-[50%] rounded bg-slate-200 flex justify-center items-center'>Creator</div>
                                </div>
                            </div>
                        
                    </div>
                </div>

            </div>
        
        </div>
    )
}