<template>
  <button
    class="capitalize text-red-900 border border-red-900 rounded-lg p-4 hover:bg-red-800 hover:text-white focus:bg-red-900 focus:text-white"
    @click.prevent="actions"
  >
    <slot name="text" />
  </button>
</template>

<script>
export default {
  methods: {
    actions() {
      this.$emit('action');
    }
  }
};
</script>

<style></style>
