<template>
  <LearnScaffold #default="{ items }">
    <div class="px-4 lg:mt-4 flex flex-col lg:flex-row lg:flex-wrap">
      <h1 class="text-4xl text-center self-center w-screen">
        Learn more about Microservices
      </h1>

      <div
        class="px-4 my-4 shadow-md rounded-lg p-4 flex flex-col lg:w-1/3 lg:mx-10"
      >
        <h2 class="text-xl mb-2">Who am I?</h2>

        <div class="flex min-h-40">
          <img
            :src="require('@/assets/images/me.jpg')"
            alt="That's me!"
            class="h-20 w-auto my-auto rounded mr-4"
          />

          <p class="px-1 text-justify">
            My name is João Francisco, I'm a masters student in Computer
            Science, at University of São Paulo.
          </p>
        </div>

        <p class="px-1 text-justify">
          My work is about Microservices and I'm very fond of Software
          Architecture.
        </p>

        <p class="text-lg mt-2 text-gray-600">Recent work</p>
        <NuxtLink
          v-for="{ title, route, order } of recentWork"
          :key="title"
          class="underline text-gray-600 mt-2"
          :to="route"
        >
          {{ order }}) {{ title }}
        </NuxtLink>
      </div>

      <div class="flex flex-col mt-4 w-1/2">
        <p class="text-lg mt-2 text-gray-600 mb-4">More about the Patterns</p>
        <div class="flex flex-col lg:flex-row lg:flex-wrap">
          <NuxtLink
            v-for="item in items"
            :key="item"
            class="link pattern-link"
            :to="`/learn/${item}`"
          >
            {{ item }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col mt-8 lg:w-2/5 lg:ml-10 lg:pr-10">
        <p class="text-lg mt-2 text-gray-600 mb-4">Bookshelf</p>
        <div class="flex flex-col">
          <a
            v-for="{ url, title, authors } of books"
            :key="title"
            :href="url"
            class="link"
            target="_blank"
          >
            <span>{{ title }}</span>
            <span class="hidden lg:inline">- {{ authors.join(', ') }}</span>
          </a>
          <div v-if="suggestionsEnabled" class="my-4">
            <label for="book-suggestion">
              Any suggestion? Send me the book's title and authors!
            </label>
            <div
              class="border border-gray-600 rounded-full pl-3 w-full mt-2 flex"
            >
              <input
                id="book-suggestion"
                v-model="bookSuggestion"
                type="text"
                class="outline-none w-full h-full px-1 py-2"
              />
              <button
                class="px-4 font-bold text-white rounded-r-full bg-gray-600 focus:outline-none"
                @click="suggestBook"
              >
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LearnScaffold>
</template>

<script>
export default {
  data: () => ({
    bookSuggestion: '',

    recentWork: [
      {
        title: `A Method for Architectural Trade-off Analysis Based on Patterns: Evaluating Microservices Structural Attributes`,
        route: '/learn/trade-offs-method',
        order: 1,
      },
      {
        title: `SortingHat: a platform for documenting and recoverying software architecture of Microservices and SOA systems`,
        route: '/learn/sorting-hat',
        order: 2,
      },
      {
        title: 'Byron - an event-driven microservices framework',
        route: '/learn/byron',
        order: 3,
      },
    ],

    books: [
      {
        url: `https://www.manning.com/books/microservices-patterns?a_aid=microservices-patterns-chris&a_bid=2d6d8a4d`,
        title: 'Microservices Patterns',
        authors: ['Chris Richardson'],
      },
      {
        url: `https://www.oreilly.com/library/view/building-microservices/9781491950340/`,
        title: 'Building Microservices',
        authors: ['Sam Newman'],
      },
      {
        url: `https://www.oreilly.com/library/view/cloud-native-infrastructure/9781491984291/`,
        title: 'Cloud Native Infrastructure',
        authors: ['Justin Garrison', 'Kris Nova'],
      },
      {
        url: `https://www.oreilly.com/library/view/effective-devops/9781491926291/`,
        title: 'Effective DevOps',
        authors: ['Jennifer Davis', 'Ryn Daniels'],
      },
      {
        url: `https://www.oreilly.com/library/view/reactive-microsystems/9781491994368/`,
        title: 'Reactive Microsystems',
        authors: ['Jonas Bonér'],
      },
    ],
  }),

  computed: {
    suggestionsEnabled() {
      const envEnabled = process.env.ENABLE_BOOK_SUGGESTION
      return Boolean(envEnabled) && envEnabled === 'true'
    },
  },

  methods: {
    suggestBook() {
      console.log(this.bookSuggestion)
      this.bookSuggestion = ''
    },
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @apply underline text-gray-600 my-1;
}

@screen lg {
  .pattern-link {
    @apply py-1 px-4 m-2 bg-gray-600 text-white text-center rounded-full no-underline;
  }
}
</style>
