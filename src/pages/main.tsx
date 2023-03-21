import './main.css'

export default function Main() {
    return (
        <div className="Main p-5 align-items-center">
            <div className='Introduction m-5'>
                <p className='Name fw-bolder fs-1 m-0'>carince</p>
                <div className='Description fw-light fs-4 d-flex flex-row justify-content-center'>
                    <p className='text-decoration-line-through'>un</p>
                    <p>professional web/app developer</p>
                </div>
            </div>
            <div className='About border rounded-3 shadow-lg p-3 my-4'>
                <p className='Title fw-bold fs-3'> About Me </p>
                <p className='Description fw-light fs-5 m-0'> A (soon2be) software engineer with my area of expertise in creating applications with occasional involvement in designing.  </p>
            </div>
            <div className='Stack border rounded-3 shadow-lg p-3 my-4'>
                <p className='Title fw-bold fs-3'> Tech Stack </p>
                <p className='Description fw-light fs-5 m-0'> JavaScript, TypeScript, Node.js, Electron, React, MIT </p>
            </div>
        </div>
    )
}