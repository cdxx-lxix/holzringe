<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import { RouterView } from 'vue-router'
</script>