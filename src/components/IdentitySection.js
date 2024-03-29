import { useState, useEffect } from 'react'

import sampleImg from '../test_pic.jpg'

const IdentitySection = () => {
    const [visionSegment, setVisionSegment] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        console.log(6 * window.innerHeight)
        if (scrollPosition > 11 * window.innerHeight) {
            if (visionSegment !== 2) {
                setVisionSegment(2)
            }
        } else if (scrollPosition > 10 * window.innerHeight) {
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
                <div className="flex flex-row justify-center mobile:h-2/4 mobile:w-2/4 mobile:items-end mobile:pb-10 laptop:h-full laptop:w-1/4 laptop:items-center laptop:pt-24 ">
                    <div
                        className={`w-3/12 -rotate-90 font-extrabold mobile:text-5xl laptop:text-7xl ${
                            visionSegment === 0
                                ? 'text-pink-300 transition duration-500 ease-out'
                                : ''
                        }`}
                    >
                        FUN
                    </div>
                    <div
                        className={`w-3/12 -rotate-90 font-extrabold mobile:text-5xl laptop:text-7xl ${
                            visionSegment === 1
                                ? 'text-pink-300 transition duration-500 ease-out'
                                : ''
                        }`}
                    >
                        EFFORTLESS
                    </div>
                    <div
                        className={`w-3/12 -rotate-90 font-extrabold mobile:text-5xl laptop:text-7xl ${
                            visionSegment === 2
                                ? 'text-pink-300 transition duration-500 ease-out'
                                : ''
                        }`}
                    >
                        LUXE
                    </div>
                </div>
                <div className="relative flex items-center justify-center mobile:h-2/4 mobile:w-2/4 laptop:h-full laptop:w-1/4 ">
                    <div
                        className={`absolute  font-mono mobile:pr-3 mobile:text-base laptop:pr-8 laptop:text-2xl ${
                            visionSegment === 0
                                ? 'opacity-100 transition-opacity duration-500 ease-in '
                                : ' opacity-0 transition-opacity duration-500 ease-out'
                        }`}
                    >
                        0 Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                    </div>
                    <div
                        className={`absolute mobile:pr-3  mobile:text-base laptop:pr-8 laptop:text-2xl ${
                            visionSegment === 1
                                ? 'opacity-100 transition-opacity duration-500 ease-in'
                                : ' opacity-0 transition-opacity duration-500 ease-out'
                        }`}
                    >
                        1 Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod
                    </div>
                    <div
                        className={`absolute mobile:pr-3 mobile:text-base laptop:pr-8 laptop:text-2xl ${
                            visionSegment === 2
                                ? 'opacity-100 transition-opacity duration-500 ease-in'
                                : ' opacity-0 transition-opacity duration-500 ease-out'
                        }`}
                    >
                        2 Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>

                <div className="flex flex-col mobile:h-2/4 mobile:w-full laptop:h-full laptop:w-3/6">
                    <div className="flex h-4/5 items-end justify-end laptop:pr-8">
                        <img
                            className="w-full mobile:h-full laptop:h-3/4"
                            src={sampleImg}
                        />
                    </div>
                    <div className=" flex h-1/5 items-center  mobile:justify-center mobile:text-5xl laptop:justify-start laptop:text-8xl">
                        <div className=" bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text font-extrabold font-extrabold text-transparent">
                            IDENTITY
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdentitySection
