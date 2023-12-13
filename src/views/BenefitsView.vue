<template>
    <main class="m-auto antialiased w-full max-w-screen-2xl p-3 flex flex-col justify-center">
        <div class="w-full flex flex-col items-center holz-benefits-card p-4">
            <h1 class="font-branding text-6xl p-2 text-center w-1/2">{{ projectName }}</h1>
            <hr class="holz-benefits-hr w-1/4 mx-auto h-1">
            <h5 class="font-semibold">{{ benefitsPage.subheaderP }}</h5>
        </div>
        
        <div class="grid items-center grid-cols-5 gap-3 mx-auto h-4/5 mt-2">
            <div class="flex flex-col h-full holz-benefits-card">
                <div class="h-1/2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">H5</h5>
                    <p class="font-normal">paragraph</p>
                </div>
                <img class="h-1/2" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-col h-full holz-benefits-card">
                <div class="h-1/2 order-2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">H5</h5>
                    <p class="font-normal">paragraph</p>
                </div>
                <img class="h-1/2 order-1" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-col h-full holz-benefits-card">
                <div class="h-1/2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">H5</h5>
                    <p class="font-normal">paragraph</p>
                </div>
                <img class="h-1/2" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-col h-full holz-benefits-card">
                <div class="h-1/2 order-2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">H5</h5>
                    <p class="font-normal">paragraph</p>
                </div>
                <img class="h-1/2 order-1" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
            <div class="flex flex-col h-full holz-benefits-card">
                <div class="h-1/2 p-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">H5</h5>
                    <p class="font-normal">paragraph</p>
                </div>
                <img class="h-1/2" src="https://yt3.googleusercontent.com/ytc/APkrFKa0i9WfTf3SoA1xiPyGnMpPmugBkLaC09Izf31t=s900-c-k-c0x00ffffff-no-rj" alt="">
            </div>
        </div>
    </main>
</template>

<script setup>
import { projectName, benefitsPage } from '@/content';
</script>