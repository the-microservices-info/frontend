<template>
  <div class="flex flex-col justify-around">
    <Enunciation :question="question" :required="required" />

    <div class="mt-2">
      <slot></slot>
    </div>
  </div>
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
