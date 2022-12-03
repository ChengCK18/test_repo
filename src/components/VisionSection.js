import { useState, useEffect } from 'react'

import sampleImg from '../test_pic.jpg'

const VisionSection = () => {
    const [counter, setCounter] = useState(0)
    const [visionSegment, setVisionSegment] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        console.log(6 * window.innerHeight)
        if (scrollPosition > 7 * window.innerHeight) {
            if (visionSegment !== 2) {
                setVisionSegment(2)
            }
        } else if (scrollPosition > 6 * window.innerHeight) {
            if (visionSegment !== 1) {
                setVisionSegment(1)
            }
        } else {
            if (visionSegment !== 0) {
                setVisionSegment(0)
            }
        }
    }, [scrollPosition])

    const handleScroll = () => {
        const position = window.pageYOffset
        console.log('Position => ', position)
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="h-[400vh]">
            <div className="sticky top-0 flex h-[100vh] h-screen w-full flex-wrap">
                <div className="flex flex-col mobile:h-2/4 mobile:w-full laptop:h-full laptop:w-3/6">
                    <div className="flex h-4/5 items-center justify-center">
                        <img className="h-3/4 w-3/4" src={sampleImg} />
                    </div>
                    <div className=" flex h-1/5 items-center justify-end font-extrabold mobile:pr-2 mobile:text-5xl  laptop:pr-10 laptop:text-8xl">
                        <div className=" bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text font-extrabold text-transparent">
                            VISION
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center mobile:h-2/4 mobile:w-2/4 laptop:h-full laptop:w-1/4 ">
                    <div
                        className={`absolute pl-3 text-xl  ${
                            visionSegment === 0
                                ? 'opacity-100 transition-opacity duration-700 ease-in '
                                : ' opacity-0 transition-opacity duration-700 ease-in'
                        }`}
                    >
                        0 Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </div>
                    <div
                        className={`absolute pl-3 text-xl  ${
                            visionSegment === 1
                                ? 'opacity-100 transition-opacity duration-700 ease-in'
                                : ' opacity-0 transition-opacity duration-700 ease-in'
                        }`}
                    >
                        1 Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </div>
                    <div
                        className={`absolute pl-3 text-xl ${
                            visionSegment === 2
                                ? 'opacity-100 transition-opacity duration-700 ease-in'
                                : ' opacity-0 transition-opacity duration-700 ease-in'
                        }`}
                    >
                        2 Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mobile:h-2/4 mobile:w-2/4 laptop:h-full laptop:w-1/4 ">
                    <div
                        className={`font-extrabold mobile:text-5xl laptop:text-7xl ${
                            visionSegment === 0
                                ? 'text-pink-300 transition duration-500 ease-out'
                                : ''
                        }`}
                    >
                        WHY
                    </div>
                    <div
                        className={`font-extrabold mobile:text-5xl laptop:text-7xl ${
                            visionSegment === 1
                                ? 'text-pink-300 transition duration-500 ease-out'
                                : ''
                        }`}
                    >
                        WHAT
                    </div>
                    <div
                        className={`font-extrabold mobile:text-5xl laptop:text-7xl ${
                            visionSegment === 2
                                ? 'text-pink-300 transition duration-500 ease-out'
                                : ''
                        }`}
                    >
                        HOW
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionSection
