import { useState, useEffect,useLayoutEffect } from 'react'
import { useRef } from 'react';
import chisato from './Chisato_Nishikigi.png'
import Background from './background.jpg';
import da_video from './sample.mp4'
const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollLength, setScrollLength] = useState(10000)
    const zeVideo = useRef(null);
    const playbackConst = 100
   
    const handleOnVideoLoaded = () =>{
        setScrollLength(Math.floor(zeVideo.current.duration) * playbackConst)
    }



    let vid = document.getElementById('v0');
    if(vid !== null){
      
      
          function scrollPlay(){  
            var frameNumber  = window.pageYOffset/playbackConst;
            vid.currentTime  = frameNumber;
            window.requestAnimationFrame(scrollPlay);
            }
    
    
        window.requestAnimationFrame(scrollPlay);
    }
 
   
    const da_style= "bg-gray-300 opacity-80 text-2xl font-bold p-3 rounded-lg flex-initial w-32 text-center" 
    return (
            <div className=''>
                <div className='z-10 fixed top-10 left-0 flex flex-row-reverse space-x-14 space-x-reverse   w-screen'>
                    <div className={da_style+ ' mr-20'}>

                    </div>
                    <a href="#" className={da_style }>
                        FAQ
                    </a>
                    <a href="#" className={da_style}>
                        MINT
                    </a>
                    <a href="#" className={da_style}>
                        ABOUT
                    </a>
                    <a href="#" className={da_style}>
                        VISION
                    </a>
                    
                    <div className='flex-grow'>
                        <div className='pl-24'>
                            <button className='text-white font-bold'> LOGO</button>
                        </div>
                        
                    </div>
                </div>
                <div id='set-height' className='' style={{'height':`${scrollLength}px`}} />
                <video ref={zeVideo} id='v0' className='w-full fixed top-[0] left-[0]' autobuffer="autobuffer" preload="preload" onLoadedData={handleOnVideoLoaded}>
                    <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"></source>
                </video>
            </div>
        

        
    )


}

export default App;