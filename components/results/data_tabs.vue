<template>
  <div class="container mx-auto px-10 lg:px-32">
    <div>
      <nav class="mt-2 flex justify-start items-center overflow-x-scroll">
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

    <div v-if="selectedTab === 'General'">
      <General
        :answers="answers"
        :background-experience="backgroundExperience"
      />
    </div>

    <div v-for="tab in patternsTabs" :key="tab">
      <div v-if="selectedTab === tab">
        <PatternTab :answers="answers" :pattern-data="patternDataFor(tab)" />
      </div>
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
    payload: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    patternsTabs: [
      'Database per Service',
      'Saga',
      'Event Sourcing',
      'Asynchronous Messaging',
      'Domain Event',
      'Transactional Outbox',
      'API Composition',
      'CQRS',
      'API Gateway',
      'BFF',
      'Adapter Microservice',
    ],
    selectedTab: 'General',
  }),

  computed: {
    tabs() {
      return ['General'].concat(this.patternsTabs)
    },
  },

  methods: {
    select(tab) {
      this.selectedTab = tab
    },
    patternDataFor(tab) {
      const pl = this.payload

      return {
        'Database per Service': pl.databasePerService,
        Saga: pl.saga,
        'Event Sourcing': pl.eventSourcing,
        'Asynchronous Messaging': pl.asynchronousMessaging,
        'Domain Event': pl.domainEvent,
        'Transactional Outbox': pl.transactionalOutbox,
        'API Composition': pl.apiComposition,
        CQRS: pl.cqrs,
        'API Gateway': pl.apiGateway,
        BFF: pl.bff,
        'Adapter Microservice': pl.adapterMicroservice,
      }[tab]
    },
  },
}
</script>

<style lang="postcss" scoped>
span {
  white-space: nowrap;
}

.tab {
  @apply px-4 py-2 mx-1 bg-gray-100 text-center rounded-t-lg;
  transition: all 0.1s cubic-bezier(0.3, 0.3, 0.3, 0.3);
}

.tab.selected-tab {
  @apply bg-gray-200 font-bold;
  transition: all 0.1s cubic-bezier(0.3, 0.3, 0.3, 0.3);
}

*::-webkit-scrollbar {
  height: 0.25rem;
}

*::-webkit-scrollbar-thumb {
  height: 0.25rem;
  border-radius: 4rem;
  background-color: darkgrey;
}
</style>
