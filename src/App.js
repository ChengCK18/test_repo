import { useState } from 'react'
import { useRef } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { BsTwitter, BsSpotify } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
// import sampleVid from './sample_vid.mp4'
const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollLength, setScrollLength] = useState(10000)
    const zeVideo = useRef(null)
    const playbackConst = 100

    const handleOnVideoLoaded = () => {
        setScrollLength(Math.floor(zeVideo.current.duration) * playbackConst)
    }
    let vid = document.getElementById('v0')
    if (vid !== null) {
        function scrollPlay() {
            var frameNumber = window.pageYOffset / playbackConst
            vid.currentTime = frameNumber
            window.requestAnimationFrame(scrollPlay)
        }

        window.requestAnimationFrame(scrollPlay)
    }

    const da_style =
        'bg-gray-300 opacity-80 text-2xl font-bold p-2 rounded-lg flex-initial w-28 text-center '

    return (
        <div className="">
            <div className="fixed top-10 left-0 z-10 flex w-screen flex-row-reverse  flex-wrap  space-x-8 space-x-reverse">
                <div
                    className={
                        'mr-20 flex w-48 flex-initial flex-row space-x-6 rounded-lg bg-gray-300 pl-3 pt-3 text-center text-2xl font-bold opacity-80'
                    }
                >
                    <a href="https://discord.com/">
                        <FaDiscord />
                    </a>
                    <a href="https://twitter.com/">
                        <BsTwitter />
                    </a>
                    <a href="https://www.instagram.com/">
                        <AiFillInstagram />
                    </a>
                    <a href="https://open.spotify.com/">
                        <BsSpotify />
                    </a>
                </div>
                <a href="#" className={da_style}>
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

                <div className="flex-grow">
                    <div className="pl-16">
                        <button className="font-bold text-white"> LOGO</button>
                    </div>
                </div>
            </div>
            <div
                id="set-height"
                className=""
                style={{ height: `${scrollLength}px` }}
            />
            <video
                ref={zeVideo}
                id="v0"
                className="fixed top-[0] left-[0] w-full h-full object-fill"
                preload="auto"
                onLoadedData={handleOnVideoLoaded}
            >
                <source
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                ></source>
            </video>
        </div>
    )
}

export default App
