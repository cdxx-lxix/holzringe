<template>
    <header>
        <nav class="holz-app-nav w-full z-20">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div class="flex items-center space-x-3">
                    <img :src="headerContent.logolink" class="h-10 hover:animate-spin hover:delay-150  hover:ease-in-out" alt="Holzringe Logo">
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0">
                    <label class="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" :checked="themeButton" @click="themeSwitcher">
                        <div
                            class="holz-app-nav-toggle w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
                        </div>
                    </label>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="holz-mobile-nav inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">{{ headerContent.srmenutip }}</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-menu uppercase font-bold"
                    id="navbar-sticky">
                    <ul
                        class="holz-app-nav-ul flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
                        <li v-for="item in headerContent.menu" :key="item.name">
                            <RouterLink :to="item.link" class="holz-app-nav-button block py-2 px-3 rounded md:p-0" active-class="holz-app-nav-button-arrow">{{
                                item.name }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { headerContent } from '@/content'
import { ref } from 'vue';

const themeButton = ref('')
const themeSwitcher = () => {
    if (themeButton.value) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = ''
        themeButton.value = false
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        themeButton.value = true
    }
}

// Detect and set a theme on load. Add a class to <html> if it's a dark one. 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeButton.value = false
  themeSwitcher()
} else {
  themeButton.value = true
  themeSwitcher()
}
</script>