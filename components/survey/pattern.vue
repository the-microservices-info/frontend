<template>
  <SectionCard :title="name" :status="status">
    <PatternSection :pattern="name" @update="update($event)">
      <div class="flex flex-col">
        <img :src="imageSrc" :alt="alt" class="mx-auto" />

        <p v-for="par in paragraphs" :key="par" class="my-2">
          {{ par }}
        </p>
      </div>
    </PatternSection>
  </SectionCard>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    paragraphs: {
      type: Array,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    sectionValid: undefined,
  }),
  computed: {
    alt() {
      return `${this.name} representation`
    },
    status() {
      if (this.sectionValid === undefined) return 'neutral'

      return this.sectionValid ? 'valid' : 'invalid'
    },
  },
  created() {
    this.initPattern(this.name)
  },
  methods: {
    ...mapMutations(['initPattern', 'setPattern', 'setPatternValid']),
    update(answers) {
      const { knowledgeType, isUsed, statements } = answers
      this.setPattern({ name: this.name, answers })

      const valid =
        knowledgeType !== undefined &&
        isUsed !== undefined &&
        (!isUsed ||
          statements.reduce((acc, stt) => acc && stt.value !== undefined))

      this.setPatternValid({ name: this.name, valid })

      this.sectionValid = valid
    },
  },
}
</script>
