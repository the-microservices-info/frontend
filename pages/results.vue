<template>
  <main>
    <KeyInput
      v-if="keyPending"
      @authorized="display($event)"
      @unauthorized="blockAccess()"
    />
    <div v-else>
      {{ answers }}
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    answers: undefined,
    blocked: false,
  }),

  computed: {
    keyPending() {
      return this.answers === undefined && !this.blocked
    },
  },

  methods: {
    display(answers) {
      this.answers = answers
    },
    blockAccess() {
      this.blocked = true
    },
  },
}
</script>
