<template>
    <footer
        class="bg-white shadow sm:flex sm:items-center sm:justify-between p-3 dark:bg-gray-800 antialiased">
        <p class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
            {{ footerContent.year }} &copy; <a :href="footerContent.holz" class="hover:underline" target="_blank">Holzringe.ru</a>. Разработка и дизайн от <a :href="footerContent.creator" class="hover:underline" target="_blank">Alex Mladich</a>.
        </p>
        <div class="flex justify-center items-center space-x-1">
            <a :href="footerContent.tel" data-tooltip-target="tooltip-phone"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <PhoneIcon color="#fff" />
                <span class="sr-only">{{ footerContent.telsr }}</span>
            </a>
            <div id="tooltip-phone" role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {{ footerContent.teltip }}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a :href="footerContent.wa" data-tooltip-target="tooltip-whatsapp"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <WhatsappIcon color="#fff" />
                <span class="sr-only">{{ footerContent.wasr }}</span>
            </a>
            <div id="tooltip-whatsapp" role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {{ footerContent.watip }}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a :href="footerContent.vb" data-tooltip-target="tooltip-viber"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <ViberIcon color="#fff" />
                <span class="sr-only">{{ footerContent.vbsr }}</span>
            </a>
            <div id="tooltip-viber" role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {{ footerContent.vbtip }}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a :href="footerContent.tg" data-tooltip-target="tooltip-telegram"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <TelegramIcon color="#fff" />
                <span class="sr-only">{{ footerContent.tgsr }}</span>
            </a>
            <div id="tooltip-telegram" role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {{ footerContent.tgtip }}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { footerContent } from '@/content';
import WhatsappIcon from '../components/icons/WhatsappIcon.vue'
import PhoneIcon from '../components/icons/PhoneIcon.vue'
import ViberIcon from '../components/icons/ViberIcon.vue'
import TelegramIcon from '../components/icons/TelegramIcon.vue'
</script>