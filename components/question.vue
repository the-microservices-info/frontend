<template>
  <p>
    <span v-if="required" class="text-red-500">*</span>
    {{ question }}
  </p>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
