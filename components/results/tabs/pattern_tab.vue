<template>
  <div class="tab-content">
    <div class="card smaller">
      <p class="text-5xl font-bold">{{ usage }}</p>
      <p class="text-lg">({{ percentageOfUse }}%) uses this pattern</p>
    </div>

    <div class="card smaller lg:order-4">
      <p class="text-lg">Type of Knowledge</p>
      <Pie :input="knowledgeType" class="chart" />
    </div>

    <div
      v-for="{ title, value, orderLg } of statements"
      :key="title"
      :class="['card', 'smaller', `lg:order-${orderLg}`]"
    >
      <p class="text-lg">{{ title }}</p>
      <Bar :input="value" class="chart" />
    </div>

    <div v-if="comments.length > 0" class="card flex-grow w-full order-last">
      <p class="font-lg mb-4">Comments</p>
      <ul class="self-start">
        <li v-for="comment in comments" :key="comment" class="pl-4 mb-2">
          {{ comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    answers: {
      type: Array,
      required: true,
    },
    patternData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    n() {
      return this.patternData.isUsed
    },

    N() {
      return this.answers.length
    },

    percentageOfUse() {
      if (this.N === 0) return 0

      return Math.floor((this.n / this.N) * 100)
    },

    usage() {
      return `${this.n} out of ${this.N}`
    },

    knowledgeType() {
      return {
        'As a pattern': this.patternData.knowledgeType[
          'Yes, I knew as a pattern'
        ],
        'As a practice': this.patternData.knowledgeType[
          "I recognize it as a practice, but I didn't know it was a pattern"
        ],
        "Didn't know": this.patternData.knowledgeType["I didn't know"],
      }
    },

    statements() {
      const titles = [
        'Present since the beginning',
        'Implemented via refactoring',
        'Adopted in variuos parts',
        'Beneficial',
      ]

      const orders = [2, 3, 5, 6]

      return this.patternData.statements.map(({ value }, i) => ({
        value,
        title: titles[i],
        orderLg: orders[i],
      }))
    },

    comments() {
      return this.patternData.comments
    },
  },
}
</script>
