<template>
  <div>
    <div>
      <ul class="flex items-center overflow-x-scroll">
        <li
          v-for="tab of tabs"
          :key="tab"
          :class="tab == selectedTab ? ['tab', 'selected-tab'] : ['tab']"
          @click="select(tab)"
        >
          {{ tab }}
        </li>
      </ul>
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
.tab {
  @apply p-4;
  transition: all 0.1s cubic-bezier(0.3, 0.3, 0.3, 0.3);
}

.tab.selected-tab {
  @apply font-bold text-xl;
  transition: all 0.1s cubic-bezier(0.3, 0.3, 0.3, 0.3);
}
</style>
