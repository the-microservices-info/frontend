<template>
  <SectionCard title="Background Experience">
    <Question
      question="From 1 to 5, how do you classify your knowledge and experience with MSA?"
      required
    >
      <div class="flex justify-between lg:w-3/4 lg:mx-auto">
        <div class="self-end">low</div>
        <div v-for="i in 5" :key="i" class="flex flex-col justify-between">
          <label :for="scaleID(i)">{{ i }}</label>
          <input :id="scaleID(i)" v-model="exp" type="radio" :value="i" />
        </div>
        <div class="self-end">high</div>
      </div>
    </Question>

    <SubsectionDivider />

    <Question
      question="What was your main source of knowledge about microservices?"
      required
    >
      <div
        v-for="source in sources"
        :key="source"
        class="flex items-baseline my-2"
      >
        <input :id="source" v-model="mainSource" type="radio" :value="source" />
        <label :for="source" class="ml-2">{{ source }}</label>
      </div>
    </Question>

    <SubsectionDivider />

    <Question question="How long have you been working with MSA?" required>
      <div v-for="year in years" :key="year" class="flex items-baseline my-2">
        <input :id="year" v-model="yearsWorking" type="radio" :value="year" />
        <label :for="year" class="ml-2">{{ year }}</label>
      </div>
    </Question>
  </SectionCard>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    exp: undefined,

    mainSource: undefined,
    sources: [
      'Books, blog posts or written tutorials',
      'Professional course, workshop or conference tutorial',
      'A collegue or consultant',
      'Learned on the job by myself',
    ],

    yearsWorking: undefined,
    years: ['0 - 1 year', '1 - 2 years', '2 - 4 years', '4+ years'],
  }),
  watch: {
    exp(newValue) {
      this.setLevel(newValue)
      this.runValidation()
    },
    mainSource(newValue) {
      this.setSource(newValue)
      this.runValidation()
    },
    yearsWorking(newValue) {
      this.setYears(newValue)
      this.runValidation()
    },
  },
  methods: {
    ...mapMutations({
      setLevel: 'setBackgroundExperienceKnowledgeLevel',
      setSource: 'setBackgroundExperienceKnowledgeSource',
      setYears: 'setBackgroundExperienceYears',
      validate: 'setBackgroundExperienceValid',
    }),
    scaleID(index) {
      return `scale-${index}`
    },
    runValidation() {
      const valid =
        this.exp !== undefined &&
        this.mainSource !== undefined &&
        this.yearsWorking !== undefined

      this.validate(valid)
    },
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
