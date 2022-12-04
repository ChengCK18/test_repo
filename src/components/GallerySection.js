const GallerySection = () => {
    return (
        <div className="h-screen ">
            <div className="flex h-3/5 flex-row flex-wrap items-end justify-center space-x-10 space-y-10 pb-5">
                <div className="h-60 w-64 bg-blue-100 shadow-lg transition ease-in-out hover:scale-110"></div>
                <div className="h-60 w-64 bg-blue-100 shadow-lg transition ease-in-out hover:scale-110"></div>
                <div className="h-60 w-64 bg-blue-100 shadow-lg transition ease-in-out hover:scale-110"></div>
                <div className="h-60 w-64 bg-blue-100 shadow-lg transition ease-in-out hover:scale-110"></div>
                <div className="h-60 w-64 bg-blue-100 shadow-lg transition ease-in-out hover:scale-110"></div>
            </div>

            <div className="flex h-2/5 flex-row">
                <div className="bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text pl-20 pt-10 text-8xl font-extrabold text-transparent">
                    GALLERY
                </div>
            </div>
        </div>
    )
}

export default GallerySection
