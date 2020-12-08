<template>
  <div class="flex flex-wrap justify-center">
    <div class="card">
      <p class="text-6xl font-bold">{{ answers.length }}</p>
      <p class="text-lg">answers</p>
    </div>

    <div class="card">
      <p class="text-lg">Years of Experience</p>
      <Bar :input="knowledgeLevel" class="chart" />
    </div>

    <div class="card">
      <p class="text-lg">Source of Knowledge</p>
      <Pie :input="knowledgeSource" class="chart" />
    </div>

    <div class="card">
      <p class="text-lg">Level of Knowledge</p>
      <Pie :input="backgroundExperience.years" class="chart" />
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
    backgroundExperience: {
      type: Object,
      required: true,
    },
  },

  computed: {
    knowledgeLevel() {
      return {
        'Very low': this.backgroundExperience.knowledgeLevel['1'],
        Low: this.backgroundExperience.knowledgeLevel['2'],
        OK: this.backgroundExperience.knowledgeLevel['3'],
        High: this.backgroundExperience.knowledgeLevel['4'],
        'Very high': this.backgroundExperience.knowledgeLevel['5'],
      }
    },
    knowledgeSource() {
      return {
        'Written material': this.backgroundExperience.knowledgeSource[
          'Books, blog posts or written tutorials'
        ],
        'With courses': this.backgroundExperience.knowledgeSource[
          'Professional course, workshop or conference tutorial'
        ],
        'Other people': this.backgroundExperience.knowledgeSource[
          'A collegue or consultant'
        ],
        'By myself': this.backgroundExperience.knowledgeSource[
          'Learned on the job by myself'
        ],
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md rounded-lg py-10 w-full flex flex-col justify-center items-center;
}

.chart {
  @apply relative w-4/5 mx-auto;
}

@screen md {
  .card {
    @apply w-1/2;
  }
}

@screen lg {
  .card {
    @apply w-1/2 mx-0 shadow-none;
  }

  .chart {
    @apply w-1/2;
  }
}
</style>
