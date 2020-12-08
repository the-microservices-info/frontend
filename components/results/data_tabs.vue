<template>
  <div class="container mx-auto px-10 lg:px-32">
    <div>
      <nav class="flex justify-start items-center overflow-x-scroll">
        <span
          v-for="tab of tabs"
          :key="tab"
          :class="tab == selectedTab ? ['tab', 'selected-tab'] : ['tab']"
          @click="select(tab)"
        >
          {{ tab }}
        </span>
      </nav>
    </div>

    <General
      v-if="selectedTab === 'General'"
      :answers="answers"
      :background-experience="backgroundExperience"
    />
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

  data: () => ({
    tabs: ['General', 'Database per Service'],
    selectedTab: 'General',
  }),

  methods: {
    select(tab) {
      this.selectedTab = tab
    },
  },
}
</script>

<style lang="postcss" scoped>
span {
  white-space: nowrap;
}

.tab {
  @apply p-4 text-center;
  transition: all 0.1s cubic-bezier(0.3, 0.3, 0.3, 0.3);
}

.tab.selected-tab {
  @apply font-bold text-xl;
  transition: all 0.1s cubic-bezier(0.3, 0.3, 0.3, 0.3);
}

*::-webkit-scrollbar {
  height: 0.5rem;
}

*::-webkit-scrollbar-thumb {
  height: 0.5rem;
  border-radius: 4rem;
  background-color: darkgrey;
}
</style>
