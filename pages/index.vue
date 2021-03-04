<template>
  <div>
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
export default {
  components: { Hero, About },
};
</script>
