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
        :database-per-service="databasePerService"
      />
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    answers: undefined,
    backgroundExperience: undefined,
    databasePerService: undefined,
    blocked: false,
  }),

  computed: {
    keyPending() {
      return this.answers === undefined && !this.blocked
    },
  },

  methods: {
    display({ answers, backgroundExperience, databasePerService }) {
      this.answers = answers
      this.backgroundExperience = backgroundExperience
      this.databasePerService = databasePerService
    },
    blockAccess() {
      this.blocked = true
    },
  },
}
</script>
