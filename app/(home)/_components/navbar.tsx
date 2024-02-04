"use client"
import { Plus } from "lucide-react"
import { CircleUserRound } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Dialog,DialogTrigger,DialogContent } from "@/components/ui/dialog"
import { useState } from "react"
import { Hint } from "@/components/hints";
import { url } from "inspector";
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Navbar = () => {
    const [profilePic,setProfilePic] = useState<string>("/pfp.png")
    const [username,setusername] = useState<string>("Dan Mace")
    const [notifcount,setnotifcount] = useState<number>(5)
    return(
        <div className=" w-full z-0 flex items-center gap-x-4 p-5 px-10 h-[110px] bg-cover bg-center"  style={{backgroundImage: 'url("/navbg.png")'}}>
            
           

                <span className="flex-1 font-bold text-2xl ml-8 " >
                    <Link href="/" >
                        aBit
                    </Link>
                </span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="lg:hidden flex ">
                        
                    {profilePic?
                            
                            <div className="flex gap-2 items-center">
                                <Hint label={username+"'s account"} side="bottom">  
                                    <Image 
                                    src={profilePic}
                                    alt={username+" account"}
                                    height={38}
                                    width={38}
                                    className="rounded-full"/>
                                </Hint>
                                <Hint label="More" side="bottom">
                                    <ChevronDown />
                                </Hint>
                            </div>

                        :<div className="flex gap-2 items-center">
                            <Hint label="User Profile" side="bottom">
                                <CircleUserRound />
                            </Hint>
                            <Hint label="More" side="bottom">
                                <ChevronDown />
                            </Hint>
                        </div>}
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                    <div className="flex flex-col gap-4 p-4 items-center justify-center">

                                <div>
                                    <Button variant={"outline"} className=" font-semibold border-[#764CC2] bg-transparent rounded-full border-[2px]">
                                        <span className="text-[#764CC2]">Share new video</span>
                                    </Button>
                                </div>
                                <div className="mt-4 flex justify-center items-center w-full gap-2">
                                    <Hint label="wallet" side="bottom">

                                    <Link href=
                                    {{pathname:"/",
                                    query:{
                                        wallet:true
                                    }}}>
                                        <Image 
                                        src="/wallet.png"
                                        alt="wallet icon"
                                        height={28}
                                        width={28}/>
                                    </Link>
                                    </Hint>
                                    <Hint label={"unread notifications "+notifcount} side="bottom">
                                    <Link href=
                                    {{pathname:"/",
                                    query:{
                                        notif:"unread"
                                    }}}>
                                        <Image 
                                        src="/notif.png"
                                        alt="notifications icon"
                                        height={36}
                                        width={36}/>
                                    </Link>
                                    </Hint>

                                </div>
                                
                                <div>
                                    <span className="font-semibold">{username}</span>
                                </div>
                                <div className="mt-4 flex flex-col w-full gap-2">
                                    <div className="flex">
                                        <span className="flex-1">email:</span>
                                        <span>danMace@xyz.com</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Project Uploads:</span>
                                        <span>5</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Total funds raised:</span>
                                        <span>$1234</span>
                                    </div>

                                </div>
                                <Link href={{
                                    pathname:"/settings",
                                    query:{
                                        username:username,
                                        userid:1452
                                    }
                                
                                }}>
                                    <Button variant="outline" className="shadow-md mt-4">Account Settings</Button>
                                </Link>

                            </div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="hidden lg:flex items-center gap-6 ">
                    <Button variant={"outline"} className=" font-semibold border-[#764CC2] bg-transparent rounded-full border-[2px]">
                        <span className="text-[#764CC2]">Share new video</span>
                    </Button>
                    <Hint label="wallet" side="bottom">

                        <Link href=
                        {{pathname:"/",
                        query:{
                            wallet:true
                        }}}>
                            <Image 
                            src="/wallet.png"
                            alt="wallet icon"
                            height={28}
                            width={28}/>
                        </Link>
                    </Hint>
                    <Hint label={"unread notifications "+notifcount} side="bottom">
                        <Link href=
                        {{pathname:"/",
                        query:{
                            notif:"unread"
                        }}}>
                            <Image 
                            src="/notif.png"
                            alt="notifications icon"
                            height={36}
                            width={36}/>
                        </Link>
                    </Hint>

                    <Dialog>
                        <DialogTrigger>
                            
                            {profilePic?
                            
                                <div className="flex gap-2 items-center">
                                    <Hint label={username+"'s account"} side="bottom">  
                                        <Image 
                                        src={profilePic}
                                        alt={username+" account"}
                                        height={38}
                                        width={38}
                                        className="rounded-full"/>
                                    </Hint>
                                    <Hint label="More" side="bottom">
                                        <ChevronDown />
                                    </Hint>
                                </div>

                            :<div className="flex gap-2 items-center">
                                <Hint label="User Profile" side="bottom">
                                    <CircleUserRound />
                                </Hint>
                                <Hint label="More" side="bottom">
                                    <ChevronDown />
                                </Hint>
                            </div>}

                            
                        </DialogTrigger>
                        <DialogContent>
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <Image 
                                    src={profilePic}
                                    alt="profile picture"
                                    height={100}
                                    width={100} />
                                </div>
                                <div>
                                    <span className="font-semibold">{username}</span>
                                </div>
                                <div className="mt-4 flex flex-col w-full gap-2">
                                    <div className="flex">
                                        <span className="flex-1">email:</span>
                                        <span>danMace@xyz.com</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Project Uploads:</span>
                                        <span>5</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Total funds raised:</span>
                                        <span>$1234</span>
                                    </div>

                                </div>
                                <Link href={{
                                    pathname:"/settings",
                                    query:{
                                        username:username,
                                        userid:1452
                                    }
                                
                                }}>
                                    <Button variant="outline" className="shadow-md mt-4">Account Settings</Button>
                                </Link>

                            </div>
                        </DialogContent>
                    </Dialog>

                
            </div>

        </div>
    )
}