<template>
  <wrapper
    :id-page="'about'"
    :height="'h-auto sm:h-screen'"
    class="py-16 sm:pb-0 sm:pt-0"
  >
    <template #content>
      <div
        class="flex flex-col sm:flex-row items-center h-full rounded-lg sm:rounded-none"
      >
        <div
          class="hidden sm:flex justify-center items-center h-3/5 sm:h-full w-full sm:w-1/2"
        >
          <div class="w-full h-full flex justify-center items-center">
            <NuxtImg
              provider="cloudinary"
              src="personal/ar_gjalg1.png"
              alt="img-about"
              fit="cover"
              format="webp"
              height="300"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-once="true"
          data-aos-offset="0"
          data-aos-duration="500"
          class="pl-auto sm:pl-8"
        >
          <h2
            class="text-2xl sm:text-4xl tracking-wide text-left font-extrabold text-gray-900 mb-4"
          >
            About Me
          </h2>
          <div class="w-1/3 h-0.5 bg-red-900"></div>
          <p
            class="text-base text-gray-900 sm:max-w-xl sm:mx-auto sm:text-lg lg:mx-0 mb-2 mt-4"
          >
            My Name is Ahmad Ridwan, you can call me Iwan. My interest in web
            development started in 2019 when I decided to join a Coding Bootcamp
            <span class="font-bold">Arkademy</span>.
          </p>
          <p
            class="text-base text-gray-900 sm:max-w-xl sm:mx-auto sm:text-lg lg:mx-0 mb-2"
          >
            I've had working at start-up, IT consultant/service and a
            Corporation. My main focus these days is on Front End Development.
          </p>
          <p
            class="text-base text-gray-900 sm:max-w-xl sm:mx-auto sm:text-lg lg:mx-0"
          >
            I also recently launched an E-Invitation named "Suaksa ID".
          </p>
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
  }
};
</script>
