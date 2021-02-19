<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Header />

        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <p
              class="text-lg sm:text-xl md:text-2xl text-gray-500 mb-2 load-hidden v-scroll-reveal"
            >
              Hello there, my name is
            </p>
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block text-red-900 xl:inline">Ahmad Ridwan</span>
              <!-- <span class="block text-indigo-600 xl:inline"
                >I Build</span
              > -->
            </h1>
            <h2
              class="text-2xl tracking-tight font-extrabold md:text-4xl text-gray-700"
            >
              Welcome to my Personal Web
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolorem libero ducimus ex provident sequi, sit autem, itaque
              perspiciatis quasi ipsum laudantium dolor consequatur facilis et,
              vero atque! Perferendis, dolore!
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  More about me
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-900 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/ar.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header';
export default {
  data: () => ({
    isOpen: false,
  }),
  components: {
    Header,
  },
};
</script>

