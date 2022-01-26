<template>
  <section :class="height" class="bg-white container mx-auto px-6 overflow-hidden">
    <slot name="content" />
  </section>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: 'h-screen'
    }
  }
};
</script>

<style></style>
