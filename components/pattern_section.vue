<template>
  <div>
    <slot></slot>

    <SubsectionDivider />

    <div class="flex flex-col justify-around">
      <Question question="Did you know this pattern?" required />

      <div class="mt-2">
        <div v-for="{ id, label } in knowledgeTypes" :key="id" class="option">
          <input :id="id" v-model="knowledgeType" type="radio" :value="label" />
          <label :for="id">{{ label }}</label>
        </div>
      </div>
    </div>

    <SubsectionDivider />

    <div class="flex flex-col justify-around">
      <Question question="Is this pattern adopted in your system?" required />

      <div class="mt-2">
        <div class="option">
          <input id="used-true" v-model="isUsed" type="radio" :value="true" />
          <label for="used-true">Yes</label>
        </div>
        <div class="option">
          <input id="used-false" v-model="isUsed" type="radio" :value="false" />
          <label for="used-false">No</label>
        </div>
      </div>
    </div>

    <div v-if="!isUsed">
      <SubsectionDivider />

      <div class="flex flex-col justify-around">
        <Question question="Classify the statements below" required />
      </div>

      <div
        v-for="{ statement, stid } in statements"
        :key="stid"
        class="mt-2 mb-4 lg:w-3/4 lg:mx-auto flex flex-col justify-between"
      >
        <p class="italic text-sm font-bold">
          {{ statement }}
        </p>
        <div class="flex justify-between items-end">
          <div
            v-for="{ label, id } in agreements"
            :key="label"
            class="w-1/5 flex flex-col items-center"
          >
            <label class="text-xs text-center mb-2" :for="id">
              {{ label }}
            </label>
            <input
              :id="getId(stid, id)"
              :v-model="getModel(stid, id)"
              type="radio"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

    initial_sd: undefined,
    initial_d: undefined,
    initial_n: undefined,
    initial_a: undefined,
    initial_sa: undefined,
    refactoring_sd: undefined,
    refactoring_d: undefined,
    refactoring_n: undefined,
    refactoring_a: undefined,
    refactoring_sa: undefined,
    various_sd: undefined,
    various_d: undefined,
    various_n: undefined,
    various_a: undefined,
    various_sa: undefined,
    beneficial_sd: undefined,
    beneficial_d: undefined,
    beneficial_n: undefined,
    beneficial_a: undefined,
    beneficial_sa: undefined,
    statements: [
      {
        stid: 'initial',
        statement:
          'The pattern was present in the initial versions of the implementation',
      },
      {
        stid: 'refactoring',
        statement: 'The pattern was implemented via refactoring',
      },
      {
        stid: 'various',
        statement: 'The pattern is implemented in various parts of the system',
      },
      {
        stid: 'beneficial',
        statement: 'The usage of the pattern was beneficial to the system',
      },
    ],
    agreements: [
      {
        label: 'Strongly disagree',
        id: 'sd',
      },
      {
        label: 'Disagree',
        id: 'd',
      },
      {
        label: 'Neutral',
        id: 'n',
      },
      {
        label: 'Agree',
        id: 'a',
      },
      {
        label: 'Strongly agree',
        id: 'sa',
      },
    ],
  }),

  methods: {
    getId(stt, agremt) {
      return `${stt}-${agremt}`
    },
    getModel(stt, agremt) {
      return `${stt}_${agremt}`
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
