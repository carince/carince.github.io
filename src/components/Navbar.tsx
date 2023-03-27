import { ReactComponent as Logo } from '../assets/Logo.svg'

const navigation = [
    {
        text: "Home",
        path: "/"
    },
    {
        text: "Contact",
        path: "/contact"
    }
]

export default function Navbar() {
    return (
        <div className="Header top-0 w-full flex-none py-4 px-14 border-b border-zinc-700 bg-zinc-800 text-white">
            <div className="Header-Inner flex items-center">
                <Logo className="Header-Log fill-white"></Logo>
                <nav className='Header-Nav relative ml-auto items-center'>
                    <ul className='flex space-x-8'>
                        {navigation.map(navigate =>
                            <li><a href={navigate.path} className="font-semibold">{navigate.text}</a></li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}