export function HeroSection(){
    return(
        <div>
            {/* Statistics regarding orders */}
        <div class="border border-yellow-600 p-4 bg-white md:p-8 dark:bg-yellow-800 rounded-lg" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-yellow-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">$7300</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Revenue</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1580</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Orders</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">100</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Refunds</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">500</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Reviews</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">4.5</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Rating</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">$5600</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Net Profit</dd>
                </div>
            </dl>
        </div>
        </div>

    )
}

