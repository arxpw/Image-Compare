<script setup>
import NavigationBar from './components/navigation/NavigationBar.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>
</template>
