<template>
  <div>
    <slot></slot>

    <SubsectionDivider />

    <Question question="Did you know this pattern?" required>
      <div v-for="{ id, label } in knowledgeTypes" :key="id" class="option">
        <input
          :id="idOf(id)"
          v-model="knowledgeType"
          type="radio"
          :value="label"
        />
        <label :for="idOf(id)">{{ label }}</label>
      </div>
    </Question>

    <SubsectionDivider />

    <Question question="Is this pattern adopted in your system?" required>
      <div class="option">
        <input id="used-true" v-model="isUsed" type="radio" :value="true" />
        <label for="used-true">Yes</label>
      </div>
      <div class="option">
        <input id="used-false" v-model="isUsed" type="radio" :value="false" />
        <label for="used-false">No</label>
      </div>
    </Question>

    <div v-if="isUsed">
      <SubsectionDivider />

      <Question question="Classify the statements below" required>
        <div
          v-for="({ statement }, i) in statements"
          :key="statement"
          class="mt-2 mb-4 lg:w-3/4 lg:mx-auto flex flex-col justify-between"
        >
          <StatementAgreement
            :statement="statement"
            @select="statements[i].value = $event"
          />
        </div>
      </Question>

      <SubsectionDivider />

      <Question
        question="If you wish to, use this space to comment on the use of this pattern or on any of the answers you gave about it"
      >
        <div class="lg:mx-10">
          <textarea
            v-model="comments"
            class="w-full h-20 resize-none border rounded-md"
          >
          </textarea>
        </div>
      </Question>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pattern: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    knowledgeType: undefined,
    knowledgeTypes: [
      {
        label: 'Yes, I knew as a pattern',
        id: 'pattern',
      },
      {
        label:
          "I recognize it as a practice, but I didn't know it was a pattern",
        id: 'practice',
      },
      {
        label: "I didn't know",
        id: 'no',
      },
    ],

    isUsed: undefined,

    statements: [
      {
        statement:
          'The pattern was present in the initial versions of the implementation',
        value: undefined,
      },
      {
        statement: 'The pattern was implemented via refactoring',
        value: undefined,
      },
      {
        statement: 'The pattern is implemented in various parts of the system',
        value: undefined,
      },
      {
        statement: 'The usage of the pattern was beneficial to the system',
        value: undefined,
      },
    ],

    comments: '',
  }),
  computed: {
    name() {
      return this.pattern.toLowerCase().replace(/ /g, '-')
    },
  },
  watch: {
    knowledgeType() {
      this.update()
    },
    isUsed() {
      this.update()
    },
    statements: {
      deep: true,
      handler() {
        this.update()
      },
    },
    comments() {
      this.update()
    },
  },
  methods: {
    update() {
      this.$emit('update', {
        knowledgeType: this.knowledgeType,
        isUsed: this.isUsed,
        statements: this.statements.map((stt) => Object.assign({}, stt)),
        comments: this.comments,
      })
    },
    idOf(id) {
      return `${id}-${this.name}`
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
