import { useState, useEffect } from 'react'
import chisato from './Chisato_Nishikigi.png'
import Background from './background.jpg';

const App = () => {

    const [scrollPosition, setScrollPosition] = useState(0);


    var sectionStyle = {
        height: "100%",
        backgroundImage: `url(${Background})`
      };

    const scrollEvent = (e) => {
        if (e.target.scrollLeft % 2 === 0) {
            setScrollPosition(e.target.scrollLeft +100 ) 
        }


    }

    console.log('heree', scrollPosition)


    return (
        <div className="relative h-screen flex flex-row  bg-red-600">
            <div className="flex-1 h-screen bg-orange-500">

            </div>

            <div onScroll={scrollEvent} className="flex-1 h-screen overflow-x-scroll bg-lime-500">
                <div style={sectionStyle} className={`relative h-screen w-[5000px] bg-emerald-400`}>
                    <div style={{
                        'postion': 'absolute',
                        'paddingLeft': `${scrollPosition}px`,
                        'transition': 'all .35s ease-in-out',
                        
                    }} >
                        <img  src={chisato}/>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;