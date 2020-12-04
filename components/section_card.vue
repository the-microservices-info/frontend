<template>
  <div :class="cardClasses">
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
    status: {
      type: String,
      default: 'neutral',
    },
  },

  computed: {
    cardClasses() {
      const base = [
        'rounded-lg',
        'shadow-lg',
        'p-4',
        'mt-6',
        'card-bg',
      ].concat([`${this.status}-outline`, 'border-4'])

      return base
    },
  },
}
</script>

<style lang="postcss" scoped>
.card-bg {
  background-color: #f6f6f6;
}

.neutral-outline {
  border-color: #f6f6f6;
}

.valid-outline {
  border-color: #daf5dd;
}

.invalid-outline {
  border-color: #f5dbdb;
}
</style>
