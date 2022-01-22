<template>
  <div class="mt-16 sm:mt-0">
    <Hero />
    <About />
    <Experiences />
    <Blog />
    <Contact />
  </div>
</template>

<script>
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Experiences from '@/components/templates/Experiences';
import Blog from '@/components/templates/Blog';
import Contact from '@/components/templates/Contact';
export default {
  components: { Hero, About, Experiences, Blog, Contact }
};
</script>
