import { useState, useRef } from 'react'
import sampleVid from '../test_vid.mp4'

const LandingSection = () => {
    const [videoLoading, setVideoLoading] = useState(true)

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
    console.log('Rerendering landing section')
    return (
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
    )
}

export default LandingSection
