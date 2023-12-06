<template>
    <main class="h-full font-text grid max-w-screen-2xl p-4 mx-auto">
        <div class="grid-cols-6">
            <img class="object-scale-down" :src="testimage" alt="test">
        </div>
        <div class="grid-cols-6 ">
            <h1 class="font-branding text-6xl">HOLZRINGE</h1>
        </div>
    </main>
</template>

<script setup>
import testimage from '@/assets/images/test.png'
</script>