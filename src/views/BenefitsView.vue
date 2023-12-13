<template>
    <main class="m-auto antialiased w-full max-w-screen-2xl p-3 flex flex-col justify-center">
        <div class="w-full flex flex-col items-center holz-benefits-card p-4">
            <h1 class="font-branding text-4xl md:text-6xl p-2">{{ projectName }}</h1>
            <hr class="holz-benefits-hr w-1/3 md:w-1/4 mx-auto h-1">
            <h5 class="font-semibold">{{ benefitsPage.subheaderP }}</h5>
        </div>
        
        <div class="grid w-full items-center grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-3 mx-auto h-4/5 mt-2">
            <div class="flex flex-row md:flex-col h-full holz-benefits-card md:col-span-2">
                <div class="w-1/2 md:w-full h-full md:h-1/2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ heading }}</h5>
                    <p class=" text-sm font-text text-ellipsis overflow-hidden ...">{{ testtext }}</p>
                </div>
                <img class="object-cover w-1/2 md:w-full h-full md:h-1/2" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-row md:flex-col h-full holz-benefits-card md:col-span-2">
                <div class="w-1/2 md:w-full h-full md:h-1/2 order-2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ heading }}</h5>
                    <p class=" text-sm font-text text-ellipsis overflow-hidden ...">{{ testtext }}</p>
                </div>
                <img class="object-cover w-1/2 md:w-full h-full md:h-1/2 order-1" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-row md:flex-col h-full holz-benefits-card md:col-span-2">
                <div class="w-1/2 md:w-full h-full md:h-1/2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ heading }}</h5>
                    <p class=" text-sm font-text text-ellipsis overflow-hidden ...">{{ testtext }}</p>
                </div>
                <img class="object-cover w-1/2 md:w-full h-full md:h-1/2" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-row md:flex-col h-full holz-benefits-card md:col-span-2 md:max-lg:col-start-2">
                <div class="w-1/2 md:w-full h-full md:h-1/2 order-2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ heading }}</h5>
                    <p class=" text-sm font-text text-ellipsis overflow-hidden ...">{{ testtext }}</p>
                </div>
                <img class="object-cover w-1/2 md:w-full h-full md:h-1/2 order-1" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-row md:flex-col h-full holz-benefits-card md:col-span-2 md:max-lg:col-start-4">
                <div class="w-1/2 md:w-full h-full md:h-1/2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ heading }}</h5>
                    <p class=" text-sm font-text text-ellipsis overflow-hidden ...">{{ testtext }}</p>
                </div>
                <img class="object-cover w-1/2 md:w-full h-full md:h-1/2" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
        </div>
    </main>
</template>

<script setup>
import { projectName, benefitsPage } from '@/content';
const heading = "Какой-то заголовок";
const testtext = "Выезд по Москве для консультации и предварительного просмотра объекта бесплатный. По Московской области 500 рублей. Услуги и сроки реставрации обговариваются после просмотра объекта.";
</script>