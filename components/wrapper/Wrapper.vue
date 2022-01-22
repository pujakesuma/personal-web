<template>
  <div :class="height" class="bg-white container mx-auto px-6 overflow-hidden">
    <slot name="content" />
  </div>
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
