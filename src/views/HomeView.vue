<template>
    <main
        class="p-3 mx-auto antialiased w-full max-w-screen-2xl grid grid-cols-4 md:grid-cols-12 lg:grid-cols-10 gap-3 justify-center items-center">
        <div class="flip-card col-span-1 md:col-span-2 xl:col-span-1" v-for="wood, index in homePage.woodtypes" :key="index"
            @mouseover="hover = index" @mouseleave="hover = ''"
            :class="[{ 'flip-card-hover': hover === index || chosenTile === index }, { 'flip-card-hover': isAllFlipped }]">
            <div class="flip-card-inner w-full h-20 md:h-20 lg:h-28 ">
                <div
                    class="holz-svg-fill flip-card-front holz-card w-full h-full flex flex-col items-center justify-center">
                    <CrossIcon />
                </div>
                <div class="flip-card-back holz-card w-full h-full flex flex-col items-center justify-center"
                    :style='{ backgroundImage: "url(" + wood.link + ")", }'>
                    <h6 class="holz-wood-type font-semibold w-full py-1 font-text md:text-sm text-xs uppercase pointer-events-none">
                        {{ wood.name }}</h6>
                </div>
            </div>
        </div>
        <div class="w-full h-96 md:h-full holz-card col-span-4 md:col-span-8 lg:col-span-6 row-span-5 lg:row-span-5 md:col-start-3 lg:col-start-3 row-start-2 lg:row-start-2 flex flex-col items-center justify-center cursor-pointer"
            @click="showAll">
            <h1 class="holz-corner-borders dark:holz-corner-borders-light text-4xl md:text-5xl lg:text-6xl p-2">{{
                projectName }}</h1>
            <hr class="holz-hr w-1/3 md:w-1/4 mx-auto h-1 mb-2">
            <p class="md:text-sm text-xs">{{ homePage.subtitle_one }}</p>
            <p class="md:text-sm text-xs">{{ homePage.subtitle_two }}</p>
        </div>
    </main>
</template>

<script setup>
/* Main element and line 19 central cell. What is going on there:
Central div row-span always 5 (for some reason I had to specify it for lg: or the grid breaks)
On x-large and higher 10 columns, central div takes 6, tiles take 1 each
On lagre to x-large 10 columns, central div takes 6, tiles take 2 each
On medium to large 12 columns, central div takes 8, tiles take 2 each
On small to medium 4 columns, central div takes all 4, tiles take 1 each

How the random flip works:
Every 3 seconds randomTileChooser() generates a random index and puts it to chosenTile
css class flip-card-hover applies if a user hovers over a tile or if it's chosen by random
because of || in this if they don't interfere with each other. The index of a tile makes it a single tile
while the second part { 'flip-card-hover': isAllFlipped } applies this class to every tile. If isAllFlipped is true
the setInterval for a randomTileChooser() skips the function and waits again so when a user clicks again and the tiles
flipped back random flipping starts again almost immediately.
*/
import { ref, onMounted } from 'vue';
import { homePage, projectName } from '@/content';
import CrossIcon from '../components/icons/CrossIcon.vue'

const hover = ref(null); // Applied by user mouseover a tile
const chosenTile = ref(null) // Applied by randomTileChooser
const isAllFlipped = ref(false) // Applied by click on the central plate
const showAll = () => {
    // Makes sure to remove old values so the tiles won't stay flipped forever
    chosenTile.value = null;
    hover.value = null;
    return isAllFlipped.value = !isAllFlipped.value
}
const randomTileChooser = () => {
    let randomIndex = Math.floor(Math.random() * homePage.woodtypes.length) // 0-40
    chosenTile.value = randomIndex

    // Waits 1 second so that animation plays fully
    setTimeout(() => {
        chosenTile.value = null
    }, 1000);
}
onMounted(() => {
    setInterval(() => {
        // Don't activate if all of them are flipped
        if (isAllFlipped.value === false) {
            randomTileChooser()
        }
    }, 3000)
})
</script>