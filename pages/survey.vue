<template>
  <div>
    <ProgressBar />
    <main class="container mx-auto px-4 lg:px-40 mb-20 lg:mb-40">
      <h1 id="top" class="text-xl lg:text-2xl font-bold py-10 underline">
        Microservices Patterns Survey
      </h1>

      <Introduction />

      <BackgroundExperience />

      <MSPattern
        v-for="{ name, paragraphs, imageSrc } of patterns"
        :key="name"
        :name="name"
        :paragraphs="paragraphs"
        :image-src="imageSrc"
      />

      <PersonalInfo />

      <div class="mt-4 flex justify-center items-center">
        <button :class="btnClasses" :disabled="btnDisabled" @click="submit()">
          Submit
        </button>

        <a href="#top" class="btn btn-secondary">back to the top</a>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Introduction from '@/components/survey/introduction.vue'
import BackgroundExperience from '@/components/survey/background_experience.vue'
import MSPattern from '@/components/survey/pattern.vue'
import PersonalInfo from '@/components/survey/personal_info.vue'

export default {
  middleware: 'surveyblock',
  components: {
    Introduction,
    BackgroundExperience,
    MSPattern,
    PersonalInfo,
  },
  data: () => ({
    submitting: false,
  }),
  computed: {
    ...mapGetters({
      formValid: 'formValid',
      answers: 'answers',
      patterns: 'metaPatterns',
    }),
    btnDisabled() {
      return this.submitting || !this.formValid
    },
    btnClasses() {
      const base = ['btn', 'btn-primary']
      return this.btnDisabled ? base.concat('btn-disabled') : base
    },
  },
  methods: {
    ...mapMutations(['resetState']),
    async submit() {
      let nextRoute
      try {
        this.submitting = true
        await this.$axios.$post('/answers', this.answers)
        nextRoute = '/success'
      } catch (e) {
        nextRoute = '/oops'
      } finally {
        this.submitting = false

        this.resetState()
        this.$router.replace(nextRoute)
      }
    },
  },
}
</script>
