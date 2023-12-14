<template>
    <main
        class="font-text p-3 mx-auto antialiased w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3">
        <div class="holz-benefits-card flex flex-col items-center col-span-10">
            <div class="relative text-center p-1 font-normal bg-trprimary-1000 text-white top-0 w-full">
                <h6>{{ `${currentImageIndex + 1} из
                            ${galleryPage.images.length} | Как ${isBefore ? galleryPage.beforeTitle : galleryPage.afterTitle} на объекте` }}</h6>
                <p class="text-sm">Нажмите на фото для просмотра как {{ !isBefore ? galleryPage.beforeTitle : galleryPage.afterTitle }}</p>
            </div>
            <img class="object-cover h-full w-full"
                :src="isBefore ? galleryPage.images[currentImageIndex].before : galleryPage.images[currentImageIndex].after"
                :alt="galleryPage.images[currentImageIndex].alt"
                :style="[isBW ? 'filter: grayscale(100%);' : '', isInverted ? 'filter: invert(1);' : '']"
                @click="beforeAfter">
        </div>
        <div class="flex flex-col items-center col-span-2">
            <div class="flex flex-row justify-between holz-benefits-card w-full h-20 mb-3 p-3">
                <button class="rounded-full bg-white h-12 w-12 p-2" @click="imageSliderControls('back')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                    </svg>
                </button>
                <button class="rounded-full bg-white h-12 w-12 p-2" @click="bwfilter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M19,19L12,11V19H5L12,11V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
                    </svg>
                </button>
                <button class="rounded-full bg-white h-12 w-12 p-2" @click="invertFilter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M18,8H6V18H18M20,20H4V6H8.5L12.04,2.5L15.5,6H20M20,4H16L12,0L8,4H4A2,2 0 0,0 2,6V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V6A2,2 0 0,0 20,4Z" />
                    </svg>
                </button>
                <button class="rounded-full bg-white h-12 w-12 p-2" @click="imageSliderControls('forward')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                </button>
            </div>
            <div class="holz-benefits-card w-full h-1/2 mb-3 p-3">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ galleryPage.reviewTitle }}</h5>
                <p class="mb-2 font-semibold underline">{{ galleryPage.images[currentImageIndex].reviewer }}</p>
                <p class="font-normal">{{ galleryPage.images[currentImageIndex].review }}</p>
            </div>
            <div class="holz-benefits-card w-full h-1/2 p-3">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ galleryPage.commentTitle }}</h5>
                <p class="font-normal">{{ galleryPage.images[currentImageIndex].comment }}</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { galleryPage } from '@/content';
const currentImageIndex = ref(0)
const isBefore = ref(true)
const imageSliderControls = (direction) => {
    if (direction !== 'back' && (currentImageIndex.value === galleryPage.images.length - 1)) {
        return currentImageIndex.value = 0;
    } else if (direction === 'back' && currentImageIndex.value === 0) {
        return currentImageIndex.value = galleryPage.images.length - 1;
    } else if (direction === 'forward') {
        return currentImageIndex.value++;
    } else {
        return currentImageIndex.value--;
    }
}
const beforeAfter = () => {
    return isBefore.value = !isBefore.value
}

const isBW = ref(false)
const bwfilter = () => {
    if (isInverted.value) {
        isInverted.value = false
    }
    return isBW.value = !isBW.value
}
const isInverted = ref(false)
const invertFilter = () => {
    if (isBW.value) {
        isBW.value = false
    }
    return isInverted.value = !isInverted.value
}
</script>