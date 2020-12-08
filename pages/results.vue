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
    <div v-else>
      <DataTabs
        :answers="answers"
        :background-experience="backgroundExperience"
      />
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
