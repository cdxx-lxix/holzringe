<template>
    <main class="p-3 mx-auto antialiased w-full max-w-screen-2xl grid grid-cols-12 gap-3 justify-center items-center">
        <div class="holz-cross-tile dark:holz-cross-tile-light holz-card w-16 h-16 md:w-22 md:h-22 lg:w-28 lg:h-28 flex flex-col items-center justify-center hover:bg-amber-500"
            v-for="i in 40" :key="i">
            {{ i }}
        </div>
        <div
            class="w-full h-full holz-card col-span-8 row-span-4 col-start-3 row-start-2 flex flex-col items-center justify-center">
            <h1 class="holz-corner-borders dark:holz-corner-borders-light text-2xl md:text-4xl lg:text-6xl p-2">HOLZRINGE
            </h1>
        </div>
    </main>
</template>

<script setup>
// TODO: change tiles on hover to display type of wood its name, hex and color background in it.
// change cross color according to theme and remove it on hover
// make tiles randomly show the other side of tiles so the user may get the idea
const woodTypes = {
    birch: { classes: "hover:bg-amber-500", name: "БЕРЕЗА", color: "#EBE2D3" }
}
</script>