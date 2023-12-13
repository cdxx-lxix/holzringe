<template>
    <main class="font-text p-3 mx-auto antialiased w-full max-w-screen-2xl block">
        <div class="mx-auto my-2 max-h-full h-[84svh] dark:bg-primary-1000 bg-primary-0 border border-gray-900 dark:border-primary-0">
            <div class="h-5/6 w-full">
                <img :src="currentImage.link" :alt="currentImage.alt" class="object-cover h-full w-full">
                <div class="relative bg-trprimary-1000 text-white w-full bo px-3 flex items-center" @click="showReview" :class="isReviewVisible ? 'bottom-full h-full' : 'bottom-16'">
                    <img :src="currentImage.link" alt="Reviewer" class="rounded-full w-16 h-16 mr-4 p-1">
                    <div class="flex flex-col truncate">
                        <h6 class="font-semibold">{{ currentImage.reviewer }}</h6>
                        <p class="text-base w-11/12">{{ currentImage.review }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-1/6 max-h-full min-h-max flex flex-row whitespace-nowrap overflow-x-scroll holz-scrollbar mt-2 mx-0">
                <img class="holz-gal-image mb-2 hover:opacity-50 hover:cursor-pointer" v-for="image in images"
                    :key="image.alt" :src="image.link" :alt="image.alt" @click="imageChanger(image)"
                    :class="image.isDisplayed ? 'holz-corner-borders dark:holz-corner-borders-light p-2 filter sepia blur-xs contrast-200' : ''">
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
const images = {
    0: { link: 'https://1.bp.blogspot.com/-Obtd1tUq1Oo/U6woYy5Uq0I/AAAAAAAAkMo/PxDgOOHyTcQ/s1600/ozadje_psj_6_3.jpg', alt: 'cave', reviewer: 'Andrey1', review: 'Wsjo zbsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', isDisplayed: true },
    1: { link: 'https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/04/23133412/grotte-son-doong-vietnam.jpg', alt: 'cave', reviewer: 'Andrey2', review: 'Wsjo zbs', isDisplayed: false },
    2: { link: 'https://bonpic.com/download_img.php?dimg=7157&raz=1440x900', alt: 'cave', reviewer: 'Andrey3', review: 'Wsjo zbs', isDisplayed: false },
    3: { link: 'https://www.nastol.com.ua/pic/201405/1440x900/nastol.com.ua-98779.jpg', alt: 'cave', reviewer: 'Andrey4', review: 'Wsjo zbs', isDisplayed: false },
    4: { link: 'https://www.desktopbackground.org/download/1440x900/2012/04/15/374861_cave-nature-landscape-wallpapers-hd_1600x1071_h.jpg', alt: 'cave', reviewer: 'Andrey5', review: 'Wsjo zbs', isDisplayed: false },
    5: { link: 'https://www.zastavki.com/pictures/1440x900/2017World_Marble_Cathedral_cave_on_the_shores_of_Lake_General_Carrera__Patagonia_Chile_112735_14.jpg', alt: 'cave', reviewer: 'Andrey6', review: 'Wsjo zbs', isDisplayed: false },
    6: { link: 'https://namonitore.ru/uploads/catalog/nature/meksika_underground_lake_in_a_cavern_1440.webp', alt: 'cave', reviewer: 'Andrey7', review: 'Wsjo zbs', isDisplayed: false },
    7: { link: 'https://cdn.fishki.net/upload/post/2019/04/21/2954536/21c1416c453b6facac7d26f4dcad3e5c.jpg', alt: 'cave', reviewer: 'Andrey8', review: 'Wsjo zbs', isDisplayed: false },
    8: { link: 'https://www.desktopbackground.org/download/1440x900/2011/01/09/139423_glacier-cave-wallpapers-wallpaper_1920x1080_h.jpg', alt: 'cave', reviewer: 'Andrey9', review: 'Wsjo zbs', isDisplayed: false },
    9: { link: 'https://www.desktopbackground.org/download/1440x900/2012/04/15/374779_adventure-journal-wallpapers-wednesday-cave-mexico_1680x1050_h.jpg', alt: 'cave', reviewer: 'Andrey10', review: 'Wsjo zbs', isDisplayed: false },
    10: { link: 'https://10wallpaper.com/wallpaper/1440x900/1401/cave_in_valley-Nature_HD_Wallpaper_1440x900.jpg', alt: 'cave', reviewer: 'Andrey11', review: 'Wsjo zbs', isDisplayed: false }
}
const isReviewVisible = ref(false)
const showReview = () => {
    return isReviewVisible.value = !isReviewVisible.value
}
const currentImage = ref(images[0])
const imageChanger = (clickedImage) => {
    currentImage.value.isDisplayed = false
    currentImage.value = clickedImage
    currentImage.value.isDisplayed = true
}
</script>