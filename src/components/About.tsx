import { padding } from "../styles"

export default function About() {
    return (
        <section className={`${padding.XY} relative w-full`} id="about">
            <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c3b1e1] via-[#cfede9] to-[#e3b5bb]">About Me</p>
            <p className="text-2xl font-thin">
                Kamusta! I'm carince, a 16-year-old Filipino residing in the Philippines. As a passionate individual striving to become a web and app developer, I currently consider myself a beginner in the field. However, I am actively engaged in expanding my knowledge and enhancing my skills. In my projects, I experiment with TypeScript, Tailwind CSS, NodeJS, and React, constantly seeking new ways to improve. I embarked on my coding journey at the age of 12, and since then, it has become a source of endless inspiration for me. Witnessing my envisioned creations come to life from the ground up is incredibly gratifying. With a strong commitment to growth, I am dedicated to honing my skills and embracing the ever-evolving world of web and app development.
            </p>
        </section>
    )
}