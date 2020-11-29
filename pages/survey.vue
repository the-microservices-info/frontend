<template>
  <div class="container mx-auto px-4 lg:px-40 mb-20 lg:mb-40">
    <h1 class="text-xl lg:text-2xl font-bold py-10 underline">
      Microservices Patterns Survey
    </h1>

    <Introduction />
    <BackgroundExperience />
    <DatabasePerService />

    <div class="mt-4 flex justify-center items-center">
      <button :class="btnClasses" :disabled="btnDisabled" @click="submit()">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as jwt from 'jsonwebtoken'

import Introduction from '@/components/survey/introduction.vue'
import BackgroundExperience from '@/components/survey/background_experience.vue'
import DatabasePerService from '@/components/survey/database_per_service.vue'

export default {
  components: {
    Introduction,
    BackgroundExperience,
    DatabasePerService,
  },
  data: () => ({
    submitting: false,
  }),
  computed: {
    ...mapGetters(['formValid', 'answers']),
    btnDisabled() {
      return this.submitting || !this.formValid
    },
    btnClasses() {
      const base = ['btn', 'btn-primary']
      return this.btnDisabled ? base.concat('btn-disabled') : base
    },
  },
  methods: {
    async submit() {
      try {
        this.submitting = true
        const token = jwt.sign(this.answers, process.env.APP_SECRET)
        await this.$axios.$post('/answers', { token })
      } catch (e) {
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>
