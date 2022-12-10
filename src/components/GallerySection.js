const GallerySection = () => {
    return (
        <div className="flex w-full  mobile:h-[180vh] laptop:h-screen">
            <div className="flex h-full w-4/5 flex-row flex-wrap items-center justify-center space-y-10 pb-5 laptop:space-x-10 laptop:pl-2">
                <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-1/6 mobile:w-4/5 laptop:h-60 laptop:w-64"></div>
                <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-1/6 mobile:w-4/5 laptop:h-60 laptop:w-64"></div>
                <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-1/6 mobile:w-4/5 laptop:h-60 laptop:w-64"></div>
                <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-1/6 mobile:w-4/5 laptop:h-60 laptop:w-64"></div>
                <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-1/6 mobile:w-4/5 laptop:h-60 laptop:w-64"></div>
            </div>

            <div className="sticky top-5 flex w-1/12 flex-row items-center justify-center mobile:h-60 laptop:h-full">
                <div className="-rotate-90 bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text pb-5 pt-10 font-extrabold text-transparent  mobile:text-5xl laptop:pl-20 laptop:text-8xl">
                    GALLERY
                </div>
            </div>
        </div>
    )
}

export default GallerySection
