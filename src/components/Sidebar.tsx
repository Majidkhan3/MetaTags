"use client"


import React, { useState } from 'react'
import { Nav } from './ui/nav'

type Props = {}
import {
    AlertCircle,
    Archive,
    ArchiveX,
    BadgeCheck,
    BarChartHorizontalBig,
    BookOpenCheck,
    ChevronRight,
    File,
    Inbox,
    LayoutDashboard,
    MessagesSquare,
    NotebookPen,
    PenBox,
    Search,
    Send,
    Settings,
    ShoppingCart,
    Trash2,
    UserRound,
    Users2,
} from "lucide-react"


export default function Sidebar({ }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    function toggleSideBar() {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className=' sticky z-10     position: sticky; top-0 h-[85vh] pt-16
       '>

            <div className='relative min-w-[80px] border-r pr-4 pb-10 pt-24 h-[92vh] pl-4'>
                <div className='absolute right-[-20px] top-7'>

                    <button onClick={toggleSideBar} className='rounded-full p-2 bg-slate-100'>
                        <ChevronRight />
                    </button>
                </div>

                <Nav
                    isCollapsed={isCollapsed}
                    links={[
                        {
                            title: "Home",
                            href: "/",
                            icon: LayoutDashboard,
                            variant: "default",
                        },
                        {
                            title: "Student",

                            href: "/users",
                            icon: UserRound,
                            variant: "ghost",
                        }, {
                            title: "Courses",

                            href: "/orders",
                            icon: ShoppingCart,
                            variant: "ghost",
                        }, {
                            title: "Video",

                            href: "/settings",
                            icon: Settings,
                            variant: "ghost",
                        },
                        {
                            title: "Colleges",
                            href: "/colleges",
                            icon: NotebookPen,
                            variant: "ghost",
                        }, {
                            title: "Coupons",
                            href: "/coupon",
                            icon: BarChartHorizontalBig,
                            variant: "ghost",
                        }, {
                            title: "Badges",
                            href: "/badges",
                            icon: BadgeCheck,
                            variant: "ghost"
                        }
                        , {
                            title: "Books",
                            href: "/books",
                            icon: BookOpenCheck,
                            variant: "ghost",
                        }
                        ,
                        {
                            title: "file Main",

                            href: "/file",
                            icon: File,
                            variant: "ghost"
                        }




                    ]}
                />
            </div>
        </div>

    )
}