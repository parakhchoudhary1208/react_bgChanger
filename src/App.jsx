import { useState } from 'react'

function App() {

    let [color, setColor] = useState('black');


    return (
        <>
            <div className="w-full h-screen duration-200"
            style={{backgroundColor: color}}
            >
                <div className='flex fixed flex-wrap px-2 justify-center inset-x-0 bottom-12'>
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
                        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
                        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App
