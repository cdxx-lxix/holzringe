<template>
  <PageHeader />

  <router-view v-slot="{ Component, route }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <PageFooter />
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import { RouterView } from 'vue-router'
</script>