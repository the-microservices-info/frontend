<template>
  <div class="rounded-lg shadow-lg p-4 card-bg mt-6">
    <h2 class="text-lg mb-4 text-center lg:font-bold">{{ title }}</h2>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.card-bg {
  background-color: #f6f6f6;
}
</style>
