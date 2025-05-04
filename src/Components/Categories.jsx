export function Categories() {
    return (
   <>     
            <blockquote class="text-5xl font-semibold text-gray-900 dark:text-white p-4">
                <p className=" font-semibold text-gray-700 py-6">Categories</p>
            </blockquote>

        {/* Display of categories like fashion, furniture, electronics,.. that the system deals in */}
        <div class="grid grid-cols-1 md:grid-cols-6  gap-4 rounded-lg">
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative ">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-gray-900 dark:text-white-700 px-8 py-8">Fashion</p>
                </div>

                <img class="h-full max-w-full shadow-xl rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/699/664/33/model-fashion-women-wallpaper-preview.jpg" alt="" />

            </div>
           
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-gray-900 dark:text-white-700 px-8 py-8">Furniture</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src=" https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=612x612&w=0&k=20&c=E5aUyAFo5_xjHcdk0nEZGVDipOkYEtyXQmJBskUbqo8=" alt="" />

            </div>
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-gray-900 dark:text-white-700 px-8 py-7">Appliances</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://blog.zuchex.com/wp-content/uploads/2022/06/shutterstock_411692476-1.jpg" alt="" />

            </div>
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic  font-thin text-gray-100 dark:text-white-700 px-8 py-8">Electronics</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/watch-vintage-pocket-with-smoke-black-background_309761-600.jpg" alt="" />

            </div>
           
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-gray-900 dark:text-white-700 px-8 py-8">Stationary</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src=" https://img.freepik.com/free-photo/top-view-back-school-stationery-with-colorful-pencils-copy-space_23-2148587576.jpg" alt="" />

            </div>
            
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic  font-thin text-gray-100 dark:text-white-700 px-8 py-8">Shoes</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://c0.wallpaperflare.com/preview/186/124/897/red-and-white-air-jordan-1-shoe-on-concrete-floor.jpg" alt="" />

            </div>

        </div>
        </>

    )
}