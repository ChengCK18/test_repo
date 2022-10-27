import { useState, useEffect } from 'react'

const App = () => {

    const [scrollPosition, setScrollPosition] = useState(1000);




    const scrollEvent = (e) => {
        console.log('heree2', e.target.scrollLeft)
        if (e.target.scrollLeft % 2 === 0) {
            setScrollPosition(e.target.scrollLeft * 1.1)
        }


    }

    console.log('heree', scrollPosition)


    return (
        <div className="relative h-screen flex flex-row  bg-red-600">
            <div className="flex-1 h-screen bg-orange-500">

            </div>

            <div onScroll={scrollEvent} className="flex-1 h-screen overflow-x-scroll bg-lime-500">
                <div className={`relative h-screen w-[5000px] bg-emerald-400`}>
                    <div style={{
                        'postion': 'absolute',
                        'padding-left': `${scrollPosition}px`,
                        'transition': 'all .1s ease-in-out'
                    }} >
                        <button> Lagtrain </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;