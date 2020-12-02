<template>
  <div>
    <main
      v-if="displaySurvey"
      class="container mx-auto px-4 lg:px-40 mb-20 lg:mb-40"
    >
      <h1 class="text-xl lg:text-2xl font-bold py-10 underline">
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

      <div class="mt-4 flex justify-center items-center">
        <button :class="btnClasses" :disabled="btnDisabled" @click="submit()">
          Submit
        </button>
      </div>
    </main>
    <main v-else-if="submitSuccess">Thanks for your collaboration!</main>
    <main v-else>
      Something went wrong on our side, sorry for the inconvinience!
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Introduction from '@/components/survey/introduction.vue'
import BackgroundExperience from '@/components/survey/background_experience.vue'
import MSPattern from '@/components/survey/pattern.vue'

import DatabasePerService from '@/assets/images/patterns/DatabasePerService.png'

export default {
  components: {
    Introduction,
    BackgroundExperience,
    MSPattern,
  },
  data: () => ({
    submitting: false,
    success: undefined,

    patterns: [
      {
        name: 'Database per Service',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: DatabasePerService,
      },
    ],
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
    displaySurvey() {
      return this.success === undefined
    },
    submitSuccess() {
      return this.success
    },
  },
  methods: {
    async submit() {
      try {
        this.submitting = true
        await this.$axios.$post('/answers', this.answers)
        this.success = true
      } catch (e) {
        this.success = false
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>
