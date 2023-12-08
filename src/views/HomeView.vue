<template>
    <main class="font-text sm:flex sm:items-center sm:justify-between p-3 mx-auto antialiased w-full max-w-screen-2xl">
        <div
            class="grid grid-cols-2 gap-1 min-w-full items-center md:flex-row w-full mx-auto">
            <img class="holz-main-img object-cover w-full"
                :src="testimage" alt="before and after restoration">
            <div class="flex flex-col items-center justify-between p-4 leading-normal">
                <h1 class="holz-corner-borders font-branding text-6xl p-2">HOLZRINGE</h1>
                <div class="grid grid-cols-2 gap-32 mt-20">
                    <div class="bg-gray-400 h-52 w-52"></div>
                    <div class="bg-gray-400 h-52 w-52"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import testimage from '@/assets/images/test.png'
// sm:flex sm:items-center sm:justify-between p-3 mx-auto antialiased w-full max-w-screen-2xl
</script>