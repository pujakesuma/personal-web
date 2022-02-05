<template>
  <main class="bg-white overflow-hidden">
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
import Header from '@/components/header/Header';

export default {
  components: {
    Header,
    Footer: () => import('@/components/Footer')
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
