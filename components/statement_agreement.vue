<template>
  <div>
    <p class="italic text-sm font-bold">
      {{ statement }}
    </p>
    <div class="flex justify-between items-end">
      <div
        v-for="agm in agreements"
        :key="agm"
        class="w-1/5 flex flex-col items-center"
      >
        <label class="text-xs text-center mb-2" :for="agm">
          {{ agm }}
        </label>
        <input :id="agm" v-model="agreement" type="radio" :value="agm" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statement: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    agreement: undefined,
    agreements: [
      'Strongly disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly agree',
    ],
  }),
  watch: {
    agreement(newValue) {
      this.$emit('select', newValue)
    },
  },
}
</script>
