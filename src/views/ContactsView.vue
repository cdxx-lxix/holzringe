<template>
    <main class="mx-auto antialiased w-full max-w-screen-2xl p-4 my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

        <div class="flex flex-col items-center mr-4 w-full h-full order-3 lg:order-1 sm:order-3 md:order-2">
            <img class="holz-card object-cover shadow flex-grow"
                src="https://i.pinimg.com/originals/3f/ed/45/3fed454b2d45f3603b21e6554d639056.jpg" alt="">
        </div>

        <div
            class="flex flex-col sm:flex-col md:grid md:grid-cols-2 md:gap-3 lg:flex lg:flex-col col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 items-center mr-4 w-full h-full order-2 sm:order-2 lg:order-2 md:order-3">
            <div
                class="holz-card flex-grow shadow mb-4 sm:mb-3 md:mb-0 lg:mb-3 p-4 justify-start sm:h-full lg:h-1/2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ contactsPage.conditionsTitle }}</h5>
                <p class="mb-2 font-semibold underline">{{ contactsPage.conditionsCalls }}</p>
                <p class="font-normal">{{ contactsPage.conditions }}</p>
            </div>
            <div class="holz-card flex-grow shadow p-4 justify-end sm:h-full lg:h-1/2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ contactsPage.aboutTitle }}</h5>
                <p class="font-normal">{{ contactsPage.about }}</p>
            </div>
        </div>

        <div class="flex flex-col w-full h-full order-1 lg:order-3">
            <div class="holz-card flex flex-row justify-evenly space-x-1 mb-4 shadow py-2">
                <a :href="contactOptions.phone" class="holz-app-footer-icon-link inline-flex p-2 rounded-lg cursor-pointer">
                    <PhoneIcon class="lg:w-10 md:w-8 lg:h-10 md:h-8 w-6 h-6" color="#f97316" />
                </a>
                <a :href="contactOptions.whatsapp"
                    class="holz-app-footer-icon-link inline-flex p-2 rounded-lg cursor-pointer">
                    <WhatsappIcon class="lg:w-10 md:w-8 lg:h-10 md:h-8 w-6 h-6" color="#25d366" />
                </a>
                <a :href="contactOptions.viber" class="holz-app-footer-icon-link inline-flex p-2 rounded-lg cursor-pointer">
                    <ViberIcon class="lg:w-10 md:w-8 lg:h-10 md:h-8 w-6 h-6" color="#7d3daf" />
                </a>
                <a :href="contactOptions.telegram"
                    class="holz-app-footer-icon-link inline-flex p-2 rounded-lg cursor-pointer">
                    <TelegramIcon class="lg:w-10 md:w-8 lg:h-10 md:h-8 w-6 h-6" color="#ffffff" />
                </a>
            </div>
            <div class="holz-card flex-grow shadow p-4">
                <!-- REPLACE EMAIL WITH THE ACTUAL ONE AFTER THE TEST! -->
                <form class="holz-contacts-form flex flex-col h-full" target="_blank" method="POST" action="https://formsubmit.co/896e9e5f6bd5c26cab337173d20ecb22" enctype="multipart/form-data">
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium">{{ contactsPage.form.mailLabel }}</label>
                        <input type="email" id="email" name="почта"
                            class="shadow-sm text-sm rounded-lg block w-full p-2.5 dark:shadow-sm-light"
                            placeholder="vyatich@yandex.ru" required>
                    </div>
                    <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium">{{ contactsPage.form.nameLabel }}</label>
                        <input type="text" id="name" name="имя" v-model="senderName"
                            class="shadow-sm text-sm rounded-lg block w-full p-2.5 dark:shadow-sm-light"
                            placeholder="Добрыня" required>
                    </div>
                    <div class="mb-5">
                        <label for="countries" class="block mb-2 text-sm font-medium">{{ contactsPage.form.locationLabel
                        }}</label>
                        <select id="countries" name="регион" class="text-sm rounded-lg block w-full p-2.5">
                            <option v-for="option in contactsPage.form.locations" :key="option">{{ option }}</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label for="message" class="block mb-2 text-sm font-medium">{{ contactsPage.form.messageLabel
                        }}</label>
                        <textarea id="message" name="сообщение" rows="9" class="block p-2.5 w-full text-sm rounded-lg dark:shadow-sm-light"
                            :placeholder="contactsPage.form.messagePlaceholder"></textarea>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium" for="additional-files">{{ contactsPage.form.fileLabel
                        }}</label>
                        <input class="shadow-sm text-sm rounded-lg block w-full  dark:shadow-sm-light"
                            aria-describedby="additional-files_help" id="additional-files" name="закрепленный файл" type="file" :accept="acceptedFilyTypes">
                        <div class="mt-1 text-sm opacity-50" id="additional-files_help">{{
                            contactsPage.form.filePlaceholder }}</div>
                    </div>
                    <input type="hidden" name="_subject" :value="`Новое сообщение на Holzringe от ${senderName}`">
                    <input type="text" name="_honey" style="display:none">
                    <input type="hidden" name="_template" value="table">
                    <button type="submit" class="font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{
                        contactsPage.form.sendButton }}</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { contactOptions, contactsPage } from '@/content';
import WhatsappIcon from '../components/icons/WhatsappIcon.vue'
import PhoneIcon from '../components/icons/PhoneIcon.vue'
import ViberIcon from '../components/icons/ViberIcon.vue'
import TelegramIcon from '../components/icons/TelegramIcon.vue'

// Only these guys are accepted by contact form
const acceptedFilyTypes = "image/*, .txt, .rtf, .doc, .docx, .xls, .xlsx, .pdf, .ppt, .pttx"
const senderName = ref('') // Used for email header so that emails won't blend together with the same topic
</script>