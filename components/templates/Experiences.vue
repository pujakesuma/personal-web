<template>
  <section
    id="experiences"
    class="flex justify-center items-center bg-white h-auto py-16"
  >
    <div
      data-aos="zoom-in-down"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-offset="0"
      data-aos-duration="500"
      class="w-11/12 sm:w-3/4"
    >
      <h2
        class="text-2xl sm:text-4xl tracking-wide text-center font-extrabold text-gray-900 mb-4"
      >
        Experiences
      </h2>
      <div>
        <Timeline />
      </div>
    </div>
  </section>
</template>

<script>
import Timeline from '../Timeline.vue';
export default {
  components: {
    Timeline
  }
};
</script>
