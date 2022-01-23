<template>
  <wrapper>
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
          class="text-left w-full sm:w-1/2 order-2 sm:order-1 "
        >
          <h2
            class="text-xl sm:text-2xl text-left capitalize font-light text-gray-900"
          >
            hello ! i'm
          </h2>

          <h1
            class="text-4xl sm:text-6xl text-left capitalize text-gray-900 mb-4"
          >
            <span class="font-light">
              Ahmad
            </span>
            <span class="font-extrabold">
              Ridwan
            </span>
          </h1>
          <div class=" w-1/3 h-0.5 bg-red-900"></div>
          <p
            class="mt-3 text-base text-gray-900 sm:text-lg sm:max-w-xl sm:mx-auto sm:mt-5 lg:mx-0"
          >
            Software Engineer with experience and passion to deliver exceptional
            customer experience
          </p>

          <!-- <button-sm class="mt-5">
            <template #text>
              contact me
            </template>
          </button-sm> -->
        </div>
        <div
          class="flex justify-center items-end h-3/5 sm:h-full w-full sm:w-1/2 order-1 sm:order-2 mb-8 sm:mb-0"
        >
          <div class="w-auto h-auto sm:h-5/6">
            <img
              class="w-full h-full object-cover"
              src="/profile.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from '@/components/wrapper/Wrapper';
export default {
  components: {
    Wrapper
  },
  data: () => ({
    isOpen: false
  })
};
</script>
