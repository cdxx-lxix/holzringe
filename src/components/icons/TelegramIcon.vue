<template>
    <svg class="w-4 h-4" viewBox="0 0 15 15" :fill="color" xmlns="http://www.w3.org/2000/svg">
        <path d="m14.5 1.5-14 5 4 2 6-4-4 5 6 4 2-12Z" stroke="#404040" stroke-linejoin="round" />
    </svg>
</template>

<script setup>
defineProps({
    color: String
})
</script>