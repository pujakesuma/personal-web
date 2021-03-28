<template>
  <wrapper class="flex items-center">
    <template #content>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-once="true"
        data-aos-offset="0"
        data-aos-duration="500"
      >
        <h2 class="text-white text-2xl font-bold sm:text-3xl md:text-4xl mb-3">
          Contact
        </h2>
        <p v-for="i in 3" :key="i" class=" text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          quis dignissimos? Ipsam rerum voluptas, molestias porro architecto
          laboriosam in distinctio neque tempora mollitia et, ipsum eveniet
          deleniti quis delectus ad?
        </p>
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from '@/components/wrapper/Wrapper';
export default {
  components: {
    Wrapper,
  },
};
</script>
