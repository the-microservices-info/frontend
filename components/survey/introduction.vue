<template>
  <SectionCard title="Introduction">
    <p
      v-for="section of introduction"
      :key="section"
      class="text-sm lg:text-lg text-justify mb-4"
    >
      {{ section }}
    </p>

    <Question
      question="Do you allow the use of your answers for that purpose?"
      required
    >
      <div class="option">
        <input id="allowed-true" v-model="allowed" type="radio" value="true" />
        <label for="allowed-true">Yes</label>
      </div>

      <div class="option">
        <input
          id="allowed-false"
          v-model="allowed"
          type="radio"
          value="false"
        />
        <label for="allowed-false">No</label>
      </div>
    </Question>
  </SectionCard>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    introduction: [
      `Hello, thanks for your interest in taking this survey! My name is João Francisco, I'm a masters student in Computer Science, at University of São Paulo, under the supervision of prof. Dr. Eduardo Guerra and prof. Dr. Alfredo Goldman. My research is about the microservices architectural style. My email is joaofran@ime.usp.br, feel free to reach out to me!`,
      `This survey intends to assess the usage of Microservice Patterns within a system that follows a Microservices Architectural Style (MSA).
For the purpose of this survey, define a system (the whole system, not a service) and keep it in mind for your answers.`,
      `This survey is organized into a few sections. First, it approaches information such as your personal experience with MAS. Then, there are the MP sections, where each pattern will be the center of the questions. The survey wraps up with information for further contact.`,
      `You'll be asked for permission to use the data about the patterns, but no personal information will be used nor published.`,
      `Estimated time to answer: between 15 and 20 minutes.`,
    ],

    allowed: undefined,
  }),

  watch: {
    allowed(newValue) {
      this.updatePermission(newValue)

      if (this.allowed !== undefined) this.validate()
      else this.invalidate()
    },
  },

  methods: {
    ...mapMutations({
      updatePermission: 'setIntroductionAllow',
      validate: 'setIntroductionValid',
      invalidate: 'setIntroductionInvalid',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.option {
  @apply flex items-baseline;
}

.option > * {
  @apply mx-2;
}
</style>
