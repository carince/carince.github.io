import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as GitHub } from '../assets/github.svg'
import { ReactComponent as Email } from '../assets/email.svg'

export default function Navbar() {
    return (
        <nav className="Header fixed top-0 w-full flex-none py-4 px-14 border-b border-zinc-700 backdrop-blur bg-zinc-900/95  text-white">
            <div className="Header-Inner flex items-center">
                <Logo className="Header-Log fill-white hover:fill-zinc-300"></Logo>
                <nav className='Header-Nav relative ml-auto items-center'>
                    <div className='flex space-x-8'>
                        <a href="https://github.com/carince" className="font-semibold ">
                            <GitHub className="fill-white hover:fill-zinc-300 h-[36px] w-max" />
                        </a>
                        <a href="mailto:carince.official@gmail.com" className="font-semibold ">
                            <Email className="fill-white hover:fill-zinc-300 h-[36px] w-max" />
                        </a>
                    </div>
                </nav>
            </div>
        </nav>
    )
}