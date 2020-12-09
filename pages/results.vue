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
        :payload="payload"
      />
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    answers: undefined,
    backgroundExperience: undefined,
    payload: undefined,
    blocked: false,
  }),

  computed: {
    keyPending() {
      return this.answers === undefined && !this.blocked
    },
  },

  methods: {
    display(payload) {
      this.answers = payload.answers
      this.backgroundExperience = payload.backgroundExperience
      this.payload = payload
    },
    blockAccess() {
      this.blocked = true
    },
  },
}
</script>
