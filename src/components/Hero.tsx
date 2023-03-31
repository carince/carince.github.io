import { Logo, BGFilled } from "../assets"
import { padding } from "../styles"

export default function Hero() {
    return (
        <section className={`${padding.X} relative w-full h-screen`} style={{ backgroundImage: `url(${BGFilled})` }}>
            <div className="flex flex-col justify-center items-center h-full">
                <p className="w-64 md:w-96 text-xl font-medium sm:text-3xl">
                   Hello! I'm
                </p>
                <Logo className="w-64 md:w-96 fill-white" />
                <p className="text-right w-64 md:w-96 text-xl font-medium sm:text-3xl">
                    web and app developer
                </p>
            </div>
        </section>
    )
}