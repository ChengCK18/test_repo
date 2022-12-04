import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import VisionSection from './components/VisionSection'
import IdentitySection from './components/IdentitySection'
import GallerySection from './components/GallerySection'
const App = () => {
    return (
        <div className="">
            <Navbar />
            <LandingSection />
            <VisionSection />
            <IdentitySection />
            <GallerySection />
            <div className="h-[300vh] bg-purple-500"></div>
        </div>
    )
}

export default App
