import { useState } from 'react'

function App() {

    let [color, setColor] = useState('black');

    return (
        <>
            <div className="w-full h-screen"
            style={{backgroundColor: color}}
            >

            </div>
        </>
    )
}

export default App
