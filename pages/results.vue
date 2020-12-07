<template>
  <main>
    <KeyInput
      v-if="keyPending"
      @authorized="display($event)"
      @unauthorized="blockAccess()"
    />
    <div v-else-if="blocked">
      <p>access blocked</p>
    </div>
    <div v-else class="flex flex-wrap p-4">
      <div class="card">
        <p class="text-6xl font-bold">{{ answers.length }}</p>
        <p class="text-lg">answers</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    answers: undefined,
    backgroundExperience: undefined,
    blocked: false,
  }),

  computed: {
    keyPending() {
      return this.answers === undefined && !this.blocked
    },
  },

  methods: {
    display({ answers, backgroundExperience }) {
      this.answers = answers
      this.backgroundExperience = backgroundExperience
    },
    blockAccess() {
      this.blocked = true
    },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md rounded-lg h-56 w-full flex flex-col justify-center items-center;
}
</style>
