<template>
  <wrapper class="py-24">
    <template #content>
      <div
        class="flex flex-col sm:flex-row items-center h-full rounded-lg sm:rounded-none"
      >
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-once="true"
          data-aos-offset="0"
          data-aos-duration="500"
          class="text-left w-auto order-2 sm:order-1 "
        >
          <p
            class="text-lg sm:text-2xl text-light mb-2 load-hidden v-scroll-reveal"
          >
            Hello there, my name is
          </p>
          <h1
            class="text-4xl sm:text-7xl tracking-tight font-extrabold text-gray-300 "
          >
            Ahmad Ridwan
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto sm:mt-5 md:text-xl lg:mx-0"
          >
            I'm a Web Developer based in Jakarta, Indonesia. I love to shares
            happiness, knowledge and some random stuff.
          </p>
          <button-sm class="mt-5">
            <template #text>
              contact me
            </template>
          </button-sm>
        </div>
        <!-- <div
          class="flex sm:hidden content-center order-1 sm:order-2 mb-8 sm:mb-0"
        >
          <div class="w-auto h-48 sm:h-96">
            <img
              class="w-full h-full object-center object-contain"
              src="/ar.png"
              alt="image"
            />
          </div>
        </div> -->
      </div>
    </template>
  </wrapper>
</template>

<script>
// import Header from '@/components/header/Header';
import Wrapper from '@/components/wrapper/Wrapper';
import ButtonSm from '@/components/button/Button';
export default {
  components: {
    Wrapper,
    ButtonSm,
  },
  data: () => ({
    isOpen: false,
  }),
};
</script>
