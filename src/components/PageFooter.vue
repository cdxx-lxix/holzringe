<template>
    <footer class="holz-app-footer w-full shadow">
        <div class="sm:flex sm:items-center sm:justify-between p-3 mx-auto antialiased w-full max-w-screen-2xl">
            <p class="holz-app-footer-text mb-4 text-sm text-center sm:mb-0">
                {{ footerContent.year }} &copy; <a :href="footerContent.holz" class="holz-app-footer-link"
                    target="_blank">Holzringe.ru</a>, Москва. Разработка и дизайн от <a :href="footerContent.creator"
                    class="holz-app-footer-link font-semibold" target="_blank">Alex Mladich</a>.
            </p>
            <div class="flex justify-center items-center space-x-1">
                <a :href="contactOptions.phone"
                    class="holz-app-footer-icon-link inline-flex justify-center p-2 rounded-lg cursor-pointer" aria-label="Позвонить по телефону">
                    <PhoneIcon class="w-4 h-4" color="#f97316" />
                </a>
                <a :href="contactOptions.whatsapp"
                    class="holz-app-footer-icon-link inline-flex justify-center p-2 rounded-lg cursor-pointer" aria-label="Связаться в Whatsapp">
                    <WhatsappIcon class="w-4 h-4" color="#25d366" />
                </a>
                <a :href="contactOptions.viber"
                    class="holz-app-footer-icon-link inline-flex justify-center p-2 rounded-lg cursor-pointer" aria-label="Связаться в Viber">
                    <ViberIcon class="w-4 h-4" color="#7d3daf" />
                </a>
                <a :href="contactOptions.telegram"
                    class="holz-app-footer-icon-link inline-flex justify-center p-2 rounded-lg cursor-pointer" aria-label="Связаться в Telegram">
                    <TelegramIcon class="w-4 h-4" color="#ffffff" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { footerContent, contactOptions } from '@/content';
import WhatsappIcon from '../components/icons/WhatsappIcon.vue'
import PhoneIcon from '../components/icons/PhoneIcon.vue'
import ViberIcon from '../components/icons/ViberIcon.vue'
import TelegramIcon from '../components/icons/TelegramIcon.vue'
</script>