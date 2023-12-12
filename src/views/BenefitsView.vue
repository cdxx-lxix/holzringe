<template>
    <main class="mx-auto antialiased w-full max-w-screen-2xl grid items-center grid-cols-1 gap-3 px-4 md:grid-cols-2 my-2">
        <div class="holz-benefits-card flex flex-row items-center shadow" v-for="i in 6" :key="i">
            <img class="object-cover w-full h-full"
                src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/05/shutterstock_713944252.jpg" alt="">
            <div class="flex flex-col justify-between p-1 mx-2 leading-normal">
                <h5 class="mb-1 text-xl font-bold tracking-tight">Noteworthy
                    technology acquisitions 2021</h5>
                <p class="mb-1 font-normal">Here are the biggest enterprise
                    technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    </main>
</template>