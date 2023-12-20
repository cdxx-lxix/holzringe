<template>
    <header>
        <nav class="holz-app-nav w-full z-20">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-3 md:px-4 py-2">
                <div class="flex items-center space-x-3">
                    <img :src="headerContent.logolink" class="h-10 hover:animate-spin hover:delay-150  hover:ease-in-out"
                        alt="Holzringe Logo">
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0">
                    <label for="toggleTwo" class="flex items-center cursor-pointer select-none ">
                        <div class="relative">
                            <input type="checkbox" id="toggleTwo" class="peer sr-only" :checked="themeButton"
                                @click="themeSwitcher" />
                            <div class="holz-app-themeswitcher-container block h-8 rounded-full w-14"></div>
                            <div
                                class="holz-app-themeswitcher-dot absolute w-6 h-6 transition rounded-full dot left-1 top-1 peer-checked:translate-x-full ">
                            </div>
                        </div>
                    </label>
                    <button type="button" @click="mobileMenuToggle"
                        class="holz-mobile-nav inline-flex p-1 w-10 h-10 text-sm rounded-full md:hidden bg-primary-1000 dark:bg-primary-0 hover:bg-teal-600 hover:dark:bg-amber-500">
                        <span class="sr-only">{{ headerContent.srmenutip }}</span>
                        <MenuIcon class="dark:fill-primary-1000 fill-primary-0 w-8 h-8" />
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-menu uppercase font-bold"
                    id="navbar-sticky">
                    <ul class="holz-app-nav-ul flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
                        <li v-for="item in headerContent.menu" :key="item.name">
                            <RouterLink :to="item.link" class="holz-app-nav-button block py-2 px-3 rounded md:p-0"
                                active-class="holz-app-nav-button-arrow">{{
                                    item.name }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div v-if="mobileMenu" class="holz-app-nav md:hidden flex flex-wrap items-center justify-center mx-auto px-3">
            <ul class="holz-app-nav-ul flex flex-row md:p-0 font-medium">
                <li v-for="item in headerContent.menu" :key="item.name">
                    <RouterLink :to="item.link" class="holz-app-nav-button block py-2 px-3 rounded"
                        active-class="holz-app-nav-button-arrow" @click="mobileMenu = false">{{
                            item.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { headerContent } from '@/content'
import { ref } from 'vue';
import MenuIcon from '@/components/icons/MenuIcon.vue'

const mobileMenu = ref(false)
const mobileMenuToggle = () => {
    return mobileMenu.value = !mobileMenu.value
}

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