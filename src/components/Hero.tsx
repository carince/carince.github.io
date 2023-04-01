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
        </section>
    )
}