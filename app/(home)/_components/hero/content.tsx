import { Plus } from "lucide-react"
import { Dialog,DialogTrigger,DialogContent } from "@/components/ui/dialog"

import Image from 'next/image'

export const Content=()=>{
    return(
        <div className="w-full p-8">
            <div className="flex flex-col md:flex-row lg:flex-row">
                <div className="flex-[0.5] flex flex-col justify-center items-start ml-10"> 
                    <span className="text-2xl" >Releases</span>
                    <p className="text-lg">Videos that you upload in collaboration with aBit appear here.</p>
                </div>
                <div className="flex-[0.4] flex justify-evenly items-center">
                    <div className="flex flex-col border-l-2 border-gray-400 pl-2"> 
                        <span className="text-xl" >1</span>
                        <p className="text-md">shared <br /> videos</p>
                    </div>
                    <div className="flex flex-col border-l-2 border-gray-400 pl-2"> 
                        <span className="text-xl" >$9510</span>
                        <p className="text-md">Funds <br /> Raised</p>
                    </div>
                    <div className="flex flex-col border-l-2 border-gray-400 pl-2"> 
                        <span className="text-xl" >1</span>
                        <p className="text-md">Co-owner <br /> community</p>
                    </div>
                    <div className="flex flex-col border-l-2 border-gray-400 pl-2"> 
                        <span className="text-xl" >1</span>
                        <p className="text-md">Co-owner <br /> Earnings</p>
                    </div>
                </div>

            </div>
            <div className="p-12">
                <div className="w-full flex flex-col md:flex-row lg:flex-row justify-start gap-10 items-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="h-[300px] w-[280px] bg-gray-300 rounded-2xl flex flex-col justify-center items-center p-7  ">
                                <Plus size={50} className="flex-1 text-gray-400" />
                                <span className="text-center text-gray-500">You haven’t uploaded any <br /> videos with aBit yet. Add now!</span>
                            </div>
                        </DialogTrigger>    
                        <DialogContent>
                            Share new video form
                        </DialogContent>
                    </Dialog>

                    <div className="h-[300px] w-[280px] bg-gray-300 rounded-2xl flex flex-col justify-between p-7 bg-fill bg-center" style={{backgroundImage: 'url("/card.png")'}}>
                        <div className="relative w-full top-[-10px] left-[-10px] ">
                            <span className="text-left text-white font-semibold text-xl">The Sound of Silence</span>
                        </div>
                        <div className="relative w-full h-[80px] bottom-[-10px] backdrop-brightness-150 flex justify-evenly items-center backdrop-blur-2xl rounded-xl  ">
                            <span className=" text-white text-center  text-xl">shares <br /> 317</span>
                            <span className=" text-white text-center  text-xl">offered <br /> 75%</span>
                            <span className=" text-white text-center  text-xl">Raised <br /> $9510</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}