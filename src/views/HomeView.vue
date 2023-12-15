<template>
    <main class="p-3 mx-auto antialiased w-full max-w-screen-2xl grid grid-cols-12 gap-3 justify-center items-center">
        <div class="flip-card" v-for="wood in homePage.woodtypes" :key="wood">
           <div class="flip-card-inner w-full h-28">
               <div class="flip-card-front holz-card w-full h-full flex flex-col items-center justify-center fill-primary-1000 dark:fill-primary-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xml:space="preserve"><path d="M84.707 68.752 65.951 49.998l18.75-18.752a1.989 1.989 0 0 0 0-2.813L71.566 15.295a1.99 1.99 0 0 0-2.814 0L49.999 34.047l-18.75-18.752c-.746-.747-2.067-.747-2.814 0L15.297 28.431a1.992 1.992 0 0 0 0 2.814L34.05 49.998 15.294 68.753a1.993 1.993 0 0 0 0 2.814L28.43 84.704a1.988 1.988 0 0 0 2.814 0l18.755-18.755 18.756 18.754c.389.388.896.583 1.407.583s1.019-.195 1.408-.583l13.138-13.137a1.99 1.99 0 0 0-.001-2.814z"/></svg>
               </div>
               <div class="flip-card-back holz-card w-full h-full flex flex-col items-center justify-center" :style='{ backgroundImage: "url(" + wood.link + ")", }'>
                  <h6 class="font-semibold bg-primary-0/30 text-primary-1000 dark:bg-primary-1000/30 dark:text-primary-0 p-1 rounded-lg font-text text-sm uppercase">{{ wood.name }}</h6>
               </div>
           </div>
        </div>
        <div
            class="w-full h-full holz-card col-span-8 row-span-4 col-start-3 row-start-2 flex flex-col items-center justify-center">
            <h1 class="holz-corner-borders dark:holz-corner-borders-light text-2xl md:text-4xl lg:text-6xl p-2">HOLZRINGE
            </h1>
        </div>
    </main>
</template>

<script setup>
import { homePage } from '@/content';

// make tiles randomly show the other side of tiles so the user may get the idea

</script>