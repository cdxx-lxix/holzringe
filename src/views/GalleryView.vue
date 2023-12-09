<template> 
    <main class="font-text p-3 mx-auto antialiased w-full max-w-screen-2xl block">
        <div class="mx-auto my-2 max-h-full h-[84svh]">
            <img :src="currentImage.link" :alt="currentImage.alt" class="object-cover h-5/6 w-full">
            <div class="w-full h-1/6 max-h-full min-h-max flex flex-row whitespace-nowrap overflow-x-scroll mt-2 mx-0">
                <img class="holz-gal-image mb-2 hover:opacity-50 " v-for="image in images" :key="image.alt" :src="image.link" :alt="image.alt" @click="imageChanger(image)" :class="image.isDisplayed ? 'holz-corner-borders p-2 filter sepia blur-xs contrast-200': ''">
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
const images = {
    0: {link: 'https://1.bp.blogspot.com/-Obtd1tUq1Oo/U6woYy5Uq0I/AAAAAAAAkMo/PxDgOOHyTcQ/s1600/ozadje_psj_6_3.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: true},
    1: {link: 'https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/04/23133412/grotte-son-doong-vietnam.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    2: {link: 'https://bonpic.com/download_img.php?dimg=7157&raz=1440x900', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    3: {link: 'https://www.nastol.com.ua/pic/201405/1440x900/nastol.com.ua-98779.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    4: {link: 'https://www.desktopbackground.org/download/1440x900/2012/04/15/374861_cave-nature-landscape-wallpapers-hd_1600x1071_h.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    5: {link: 'https://www.zastavki.com/pictures/1440x900/2017World_Marble_Cathedral_cave_on_the_shores_of_Lake_General_Carrera__Patagonia_Chile_112735_14.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    6: {link: 'https://namonitore.ru/uploads/catalog/nature/meksika_underground_lake_in_a_cavern_1440.webp', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    7: {link: 'https://cdn.fishki.net/upload/post/2019/04/21/2954536/21c1416c453b6facac7d26f4dcad3e5c.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    8: {link: 'https://www.desktopbackground.org/download/1440x900/2011/01/09/139423_glacier-cave-wallpapers-wallpaper_1920x1080_h.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    9: {link: 'https://www.desktopbackground.org/download/1440x900/2012/04/15/374779_adventure-journal-wallpapers-wednesday-cave-mexico_1680x1050_h.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false},
    10: {link: 'https://10wallpaper.com/wallpaper/1440x900/1401/cave_in_valley-Nature_HD_Wallpaper_1440x900.jpg', alt: 'cave', reviewer: '', review: '', isDisplayed: false}
}
const currentImage = ref(images[0])
const imageChanger = (clickedImage) => {
    currentImage.value.isDisplayed = false
    currentImage.value = clickedImage
    currentImage.value.isDisplayed = true
}
</script>