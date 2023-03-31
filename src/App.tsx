import { BrowserRouter } from 'react-router-dom'
import { Hero, About, Tech, Projects, Contact, Navbar } from './components'

export default function App() {
    return (
        <BrowserRouter >
            <div className='relative z-0 bg-primary'>
                <div className='bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>
                {/* 
                    To be uncommented when it is ready to be published 
                    <About />
                    <Tech />
                    <Projects />
                    <Contact /> 
                */}
            </div>
        </BrowserRouter >
    )
}

