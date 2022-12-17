const GallerySection = () => {
    return (
        <div className="flex h-screen w-screen flex-col">
            <div className="flex h-3/4 w-screen flex-row justify-center ">
                <div className="flex items-center  mobile:space-x-10  mobile:overflow-x-auto mobile:pt-44 laptop:h-full  laptop:w-full  laptop:space-y-3 laptop:pb-20">
                    <div className="flex flex-grow"></div>
                    <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-60 mobile:min-w-[250px]  laptop:h-80  laptop:w-72"></div>
                    <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110  mobile:h-60 mobile:min-w-[250px] laptop:h-80  laptop:w-72"></div>
                    <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-60 mobile:min-w-[250px] laptop:h-80  laptop:w-72"></div>
                    <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110 mobile:h-60 mobile:min-w-[250px] laptop:h-80  laptop:w-72"></div>
                    <div className="bg-blue-100 shadow-lg transition ease-in-out hover:scale-110  mobile:h-60 mobile:min-w-[250px] laptop:h-80  laptop:w-72"></div>
                    <div className="flex flex-grow"></div>
                </div>
            </div>

            <div className="flex h-1/4 w-full flex-row items-start justify-start ">
                <div className=" bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text pb-2 pt-10 font-extrabold text-transparent  mobile:text-6xl laptop:pl-20 laptop:text-8xl">
                    GALLERY
                </div>
            </div>
        </div>
    )
}

export default GallerySection
