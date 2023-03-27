import { ReactComponent as Logo } from '../assets/Logo.svg'
import Background from '../assets/bg.png'

function Home() {
  return (
    <div className='Home w-full flex flex-col justify-center align-middle p-10 space-y-16 bg-[#121212] text-white'>
      <div className="Home-Intro sm:flex items-center sm:space-x-8">
        <Logo className='Intro-Logo fill-white h-64 w-64' />
        <div className='Intro-Text font-light text-4xl sm:text-5xl'>
          /un/professional <br />web and app <br />developer
        </div>
      </div>

      <div className="Home-AboutMe sm:flex flex-col space-y-3">
        <p className='AboutMe-Header font-extrabold text-4xl sm:text-5xl'>
          About Me
        </p>
        <p className='AboutMe-Text font-light text-xl sm:text-3xl'>
        Hi there! I am carince, and I am a 15-year-old from the Philippines with a passion for web and app development. 
        I was born on April 9th, 2007, and I have been creating apps and websites since I was just 12 years old. 
        I love the process of conceptualizing an idea, writing the code, and seeing it come to life. 
        Every project is a new challenge that requires me to think critically and creatively, 
        and I enjoy the satisfaction of finding solutions to complex problems. 
        I believe that software has the power to make a positive impact on the world, and I am excited to continue 
        honing my skills and contributing to its development. In my spare time, I also contribute to open-source projects on GitHub, 
        as I believe in the power of Open Source and the impact it can have on the Tech Space.
        </p>
      </div>

      <div className="Home-Skills sm:flex flex-col space-y-3">
        <p className='Skills-Header font-extrabold text-4xl sm:text-5xl'>
          Things I use
        </p>
        <p className='AboutMe-Subheader font-extralight text-md sm:text-xl'>
          Here are the software that I use in developing!
        </p>
        <p className='AboutMe-Text font-light text-xl sm:text-3xl'>
          TODO
        </p>
      </div>
    </div>
  )
}

export default Home
