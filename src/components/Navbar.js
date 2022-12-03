import { useState, useEffect } from 'react'

import { BiMenu } from 'react-icons/bi'
import { FaDiscord } from 'react-icons/fa'
import { BsTwitter, BsSpotify } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Navbar = () => {
    const [menuDropdown, setMenuDropdown] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [previousScroll, setPreviousScroll] = useState(0)
    const [lastScrollAction, setLastScrollAction] = useState(true) //true = up, false = down

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

    const getLastScrollAction = () => {
        if (previousScroll !== window.pageYOffset) {
            const difference = previousScroll - window.pageYOffset
            if (difference < 0) {
                setLastScrollAction(false)
            } else {
                setLastScrollAction(true)
            }
            setPreviousScroll(window.pageYOffset)
        }
    }
    getLastScrollAction()

    const navItemStyle =
        'bg-gray-300 opacity-80 text-2xl font-bold p-2 rounded-lg flex-initial w-28 text-center '

    const handleMenuDropdown = () => {
        setMenuDropdown(!menuDropdown)
    }
    //

    return (
        <div
            key={''}
            className={` ${lastScrollAction ? 'visible' : 'invisible'}`}
        >
            <div className="fixed top-8 left-0 z-10 flex w-screen flex-row-reverse  flex-wrap  space-x-8 space-x-reverse mobile:hidden laptop:flex">
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
                <a href="#" className={navItemStyle}>
                    {scrollPosition}
                    {window.innerHeight}
                </a>
                <a href="#" className={navItemStyle}>
                    MINT
                </a>
                <a href="#" className={navItemStyle}>
                    ABOUT
                </a>
                <a href="#" className={navItemStyle}>
                    VISION
                </a>

                <div className="flex-grow">
                    {/* <div className="pl-16">
                        <button className="font-bold text-white"> LOGO</button>
                    </div> */}
                </div>
            </div>
            <BiMenu
                onClick={handleMenuDropdown}
                className="fixed top-8 right-8 z-10 rounded-lg bg-gray-300 text-6xl opacity-80 mobile:block laptop:hidden"
            ></BiMenu>
        </div>
    )
}

export default Navbar
