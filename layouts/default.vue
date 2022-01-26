<template>
  <main class="bg-white overflow-hidden">
    <Header />
    <Nuxt />
    <footer class="flex flex-col items-center text-gray-900 py-4">
      <small>
        Designed & Built by Ahmad Ridwan
      </small>
      <small>&copy; Copyright {{ new Date().getFullYear() }}</small>
    </footer>
  </main>
</template>

<script>
import Header from '@/components/header/Header';
export default {
  components: {
    Header
  }
};
</script>

<style></style>
