import { Logo, BGFilled, BGOutline } from "../assets"
import { padding } from "../styles"

export default function Hero() {
    return (
        <section className="relative w-full h-screen" style={{ backgroundImage: `url(${BGFilled})` }}>
            <div className="absolute w-full h-full ease-in-out duration-1000  " style={
                {
                    backgroundImage: `url(${BGOutline})`,
                    animation: `fadeInOut 10s infinite`
                }
            } />
            <div className={`${padding.X} absolute flex flex-col justify-center items-center h-full w-full`}>
                <p className="w-64 md:w-96 text-xl font-medium md:text-3xl">
                    Hello! I'm
                </p>
                <Logo className="w-64 md:w-96 fill-white" />
                <p className="text-right w-64 md:w-96 text-xl font-medium md:text-3xl">
                    web and app developer
                </p>
            </div>

            <div className="divider absolute w-full overflow-hidden rotate-180 left-0 bottom-0">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}