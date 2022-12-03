import Navbar from './components/Navbar'
import VisionSection from './components/VisionSection'

import LandingSection from './components/LandingSection'
const App = () => {
    return (
        <div className="">
            <Navbar />
            <LandingSection />

            <VisionSection />

            <div className="h-[300vh] bg-purple-500"></div>
        </div>
    )
}

export default App
