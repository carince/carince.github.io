import { useState } from 'react'
import { Link } from 'react-router-dom'

import { padding } from '../styles'
import { Logo, Menu, Close } from '../assets'

const navigation = [
    {
        id: "#about",
        title: "About"
    },
    {
        id: "#tech",
        title: "Tech"
    },
    {
        id: "#projects",
        title: "Projects"
    },
    {
        id: "#contact",
        title: "Contact"
    }
]

export default function Navbar() {
    const [activePage, setActivePage] = useState('')
    const [menuOpen, toggleMenu] = useState(false)

    return (
        <nav className={`${padding.X} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-centermax-w-7xl mx-auto'>
                <Link
                    to={"/"}
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActivePage("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <Logo className='w-9 h-9 object-contain fill-white' />
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navigation.map((nav) => (
                        <li key={nav.id}
                            className={`${activePage === nav.title
                                ? "text-white"
                                : "text-zinc-300"
                                }   hover:text-white text-[18px] font-medium cursor-pointer flex items-center
                            `}
                            onClick={() => setActivePage(nav.title)}
                        >
                            <a href={nav.id}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <button 
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => { toggleMenu(!menuOpen) }}
                    >
                        {menuOpen 
                            ? <Close className='fill-white hover:fill-zinco-300'/> 
                            : <Menu className='fill-white hover:fill-zinco-300'/> }
                    </button>
                    <div
                        className={`${!menuOpen ? 'hidden' : 'flex'} p-6 bg-tertiary absolute top-20 right-9 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navigation.map((nav) => (
                                <li key={nav.id}
                                    className={`${activePage === nav.title
                                        ? "text-white"
                                        : "text-zinc-300"
                                        }   hover:text-white text-[18px] font-medium cursor-pointer
                                    `}
                                    onClick={() => {
                                        toggleMenu(!menuOpen)
                                        setActivePage(nav.title)
                                    }}
                                >
                                    <a href={nav.id}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}