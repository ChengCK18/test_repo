import { useState, useEffect } from 'react'

const CatchPhrase = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        console.log('From CatchPhrase => ', scrollPosition)
        if (window.innerWidth <= 1024) {
            if (scrollPosition > 14.8 * window.innerHeight) {
                console.log('YOU ARE IN CATCHPHRASE SECTION')
            }
        } else {
            if (scrollPosition > 14 * window.innerHeight) {
                console.log('YOU ARE IN CATCHPHRASE SECTION')
            }
        }
        // if (scrollPosition > 11 * window.innerHeight) {
        //     if (visionSegment !== 2) {
        //         setVisionSegment(2)
        //     }
        // } else if (scrollPosition > 10 * window.innerHeight) {
        //     if (visionSegment !== 1) {
        //         setVisionSegment(1)
        //     }
        // } else {
        //     if (visionSegment !== 0) {
        //         setVisionSegment(0)
        //     }
        // }
    }, [scrollPosition])

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="relative flex h-[200vh] flex-col items-center justify-center bg-red-300">
            <div className="text-9xl">Hey</div>
        </div>
    )
}

export default CatchPhrase
