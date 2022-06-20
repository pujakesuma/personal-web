<template>
  <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-900">
    <!-- left -->
    <div class="flex flex-row-reverse md:contents">
      <div
        class="bg-white col-start-1 col-end-5 p-6 rounded-xl my-4 ml-auto shadow-lg"
      >
        <h3 class="font-bold text-lg">Front End Developer</h3>
        <div class="w-1/12 h-0.5 bg-red-900 my-1"></div>
        <h4 class="font-semibold text-sm">PT Lawencon Internasional</h4>
        <!-- <h5 class="font-light text-sm">May 2021 - Present</h5> -->
        <p class="text-sm text-left mt-2">
          Work at PT Bank Rakyat Indonesia, developing new user-facing features,
          determining the structure and design of web pages, building reusable
          codes, optimizing page loading times. Using Quasar Framework to create
          web app named "New Delivery System".
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-8">
        <div class="h-full w-4 flex items-center justify-center">
          <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
        </div>
        <div
          class="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-red-900 shadow"
        ></div>
      </div>
    </div>
    <!-- right -->
    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-8 md:mx-auto relative">
        <div class="h-full w-4 flex items-center justify-center">
          <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
        </div>
        <div
          class="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-red-900 shadow"
        ></div>
      </div>
      <div
        class="bg-white col-start-6 col-end-10 p-6 rounded-xl my-4 mr-auto shadow-lg"
      >
        <h3 class="font-bold text-lg">Full Stack Developer</h3>
        <div class="w-1/12 h-0.5 bg-red-900 my-1"></div>
        <h4 class="font-semibold text-sm">PT Teknika Cipta Lestari</h4>
        <!-- <h5 class="font-light text-sm">Mar 2020 - Apr 2021</h5> -->
        <p class="text-sm text-left mt-2">
          Build property and real estate web application named "Propertinext"
          for buy or rent property.
        </p>
      </div>
    </div>
    <!-- left -->
    <div class="flex flex-row-reverse md:contents">
      <div
        class="bg-white col-start-1 col-end-5 p-6 rounded-xl my-4 ml-auto shadow-lg"
      >
        <h3 class="font-bold text-lg">IT Infrastructure Support</h3>
        <div class="w-1/12 h-0.5 bg-red-900 my-1"></div>
        <h4 class="font-semibold text-sm">PT Infomedia Nusantara</h4>
        <!-- <h5 class="font-light text-sm">Oct 2019 - Dec 2019</h5> -->
        <p class="text-sm text-left mt-2">
          Installing and configuring computer hardware, software, systems,
          networks, printers, and scanners. Monitoring and maintaining computer
          systems and networks. Responding in a timely manner to service issues
          and requests. Providing technical support across the company
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-8">
        <div class="h-full w-4 flex items-center justify-center">
          <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
        </div>
        <div
          class="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-red-900 shadow"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineGroup'
};
</script>

<style></style>
