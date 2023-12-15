<template>
    <main
        class="p-3 mx-auto antialiased w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3">
        <div class="holz-card flex flex-col items-center col-span-12 lg:col-span-9 xl:col-span-10 h-full">
            <div class="holz-gallery-controls relative flex flex-row justify-between items-center py-1 px-3 top-0 w-full">
                <button class="rounded-full h-8 w-8 p-1" @click="imageSliderControls('back')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                    </svg>
                </button>
                <div class="text-center">
                    <h6 class="font-menu text-md">{{ `${currentImageIndex + 1} из
                            ${galleryPage.images.length} | Как ${isBefore ? galleryPage.beforeTitle : galleryPage.afterTitle} на объекте` }}</h6>
                    <p class="font-text text-sm">Нажмите на фото для просмотра как {{ !isBefore ? galleryPage.beforeTitle : galleryPage.afterTitle }}</p>
                </div>
                <button class="rounded-full h-8 w-8 p-1" @click="imageSliderControls('forward')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                </button>
            </div>
            <img class="object-cover h-full w-full aspect-square md:aspect-video"
                :src="isBefore ? galleryPage.images[currentImageIndex].before : galleryPage.images[currentImageIndex].after"
                :alt="galleryPage.images[currentImageIndex].alt"
                @click="beforeAfter">
        </div>
        <div class="flex flex-col items-center col-span-12 lg:col-span-3 xl:col-span-2">
            <div class="holz-card w-full h-full lg:h-1/2 mb-3 p-3">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ galleryPage.reviewTitle }}</h5>
                <p class="mb-2 font-semibold underline">{{ galleryPage.images[currentImageIndex].reviewer }}</p>
                <p class="font-normal">{{ galleryPage.images[currentImageIndex].review }}</p>
            </div>
            <div class="holz-card w-full h-full lg:h-1/2 p-3">
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
</script>