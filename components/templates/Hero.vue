<template>
  <div class="h-screen bg-primary container mx-auto px-4 py-24">
    <div
      class="flex flex-col sm:flex-row items-center justify-center h-full bg-secondary sm:bg-primary rounded-lg sm:rounded-none"
    >
      <div class="text-center sm:text-left w-auto sm:w-1/2 order-2 sm:order-1 ">
        <p
          class="text-lg sm:text-xl md:text-2xl text-gray-500 mb-2 load-hidden v-scroll-reveal"
        >
          Hello there, my name is
        </p>
        <h1
          class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
        >
          Ahmad Ridwan
        </h1>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 px-8 sm:px-0"
        >
          I'm a Web Developer based in Jakarta, Indonesia. I love to shares
          happiness, knowledge and some random stuff.
        </p>
      </div>
      <div class="flex content-center order-1 sm:order-2 mb-8 sm:mb-0">
        <div class="w-auto h-48 sm:h-96">
          <img
            class="w-full h-full object-center object-contain"
            src="/ar.png"
            alt="image"
          />
        </div>
      </div>
      <!-- <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Header /> -->
      <!-- <main 
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        
        ></main> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
export default {
  data: () => ({
    isOpen: false,
  }),
  components: {
    Header,
  },
};
</script>
