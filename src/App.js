import { useState, useEffect } from 'react'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import sampleVid from './test_vid.mp4'
import sampleImg from './test_pic.jpg'
const App = () => {
    const [videoLoading, setVideoLoading] = useState(true)
    const [counter, setCounter] = useState(0)
    const zeVideo = useRef(null)
    const playbackConst = 500
    const handleOnVideoLoaded = () => {
        setVideoLoading(false)
    }

    let vid = document.getElementById('v0')
    if (vid !== null) {
        const scrollPlay = () => {
            var frameNumber = window.pageYOffset / playbackConst
            vid.currentTime = frameNumber
            window.requestAnimationFrame(scrollPlay)
        }

        window.requestAnimationFrame(scrollPlay)
    }

    return (
        <div className="">
            <Navbar />

            <div className="h-[500vh]">
                <div className="sticky top-0 h-screen w-full bg-red-100 ">
                    <video
                        ref={zeVideo}
                        id="v0"
                        className="h-full w-full object-fill"
                        preload="auto"
                        onLoadedData={handleOnVideoLoaded}
                    >
                        <source
                            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                            src={sampleVid}
                        ></source>
                    </video>
                </div>
            </div>

            <div className="h-[300vh] bg-red-400">
                <div className="sticky top-0 flex h-[100vh] h-screen w-full flex-wrap">
                    <div className="flex flex-col bg-blue-100 mobile:h-2/4 mobile:w-full laptop:h-full laptop:w-3/6">
                        <div className="flex h-4/5 items-center justify-center bg-yellow-200">
                            <img className="h-2/4 w-3/4" src={sampleImg} />
                        </div>
                        <div className=" flex h-1/5 items-center justify-end bg-white font-extrabold mobile:pr-2 mobile:text-5xl  laptop:pr-10 laptop:text-8xl">
                            <div className="bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text font-extrabold text-transparent">
                                VISION
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-blue-200 mobile:h-2/4 mobile:w-2/4 laptop:h-full laptop:w-1/4 ">
                        <div
                            onClick={() => {
                                console.log('heyy')
                                let newCounter = counter + 1
                                setCounter(newCounter)
                            }}
                            className={`p-6 ${
                                counter % 2 === 0 ? 'bg-red-200' : 'bg-pink-200'
                            } transition duration-500 ease-out `}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-green-200  mobile:h-2/4 mobile:w-2/4 laptop:h-full laptop:w-1/4 ">
                        <div className="font-extrabold mobile:text-5xl laptop:text-7xl">
                            WHY
                        </div>
                        <div className="font-extrabold mobile:text-5xl laptop:text-7xl">
                            WHAT
                        </div>
                        <div className="font-extrabold mobile:text-5xl laptop:text-7xl">
                            HOW
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[300vh] bg-purple-500"></div>
        </div>
    )
}

export default App
