<template>
  <section
    id="contact"
    class="h-auto py-16 px-6 sm:px-0 flex justify-center items-center"
  >
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-offset="0"
      data-aos-duration="500"
      class="text-center flex flex-col items-center"
    >
      <h2 class="text-gray-900 text-2xl font-bold sm:text-3xl md:text-4xl mb-3">
        Get In Touch
      </h2>
      <div class="w-1/3 h-0.5 bg-red-900"></div>
      <p
        class="my-4 text-base text-gray-900 sm:text-lg sm:max-w-xl sm:mx-auto sm:mt-5 lg:mx-0"
      >
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <custom-button class="px-8" @action="emailMe">
        <template #text>
          <div class="font-semibold">
            Contact Me
          </div>
        </template>
      </custom-button>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    CustomButton: () => import('@/components/button/Button')
  },
  methods: {
    emailMe() {
      const url = 'mailto: ahmadridwan.3107@gmail.com';
      window.open(url, '_blank');
    }
  }
};
</script>
