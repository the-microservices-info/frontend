<template>
  <LearnScaffold #default="{ items }">
    <div class="px-4 lg:mt-4 flex flex-col lg:flex-row lg:flex-wrap">
      <h1 class="text-4xl text-center self-center w-screen">
        Learn more about Microservices
      </h1>

      <div class="content">
        <section>
          <h2 class="text-gray-600 hidden lg:inline">
            What are microservices?
          </h2>

          <p
            class="text-lg mt-4 lg:mt-0 lg:text-sm text-center leading-relaxed"
          >
            Microservices are an <strong>architectural style</strong> which
            guides the application to be a set of services divided accordingly
            to <strong>Bounded-Contexts</strong>. Each (micro) service is
            <strong>autonomous</strong> (AKA has a low coupling level with
            others), communicates through <strong>lightweigth means</strong>,
            has a <strong>small team</strong> taking care of its full lifecycle,
            and is <strong>independently deployed</strong>.
          </p>
        </section>

        <section>
          <h2 class="text-gray-600">Microservice Patterns</h2>
          <div class="flex flex-wrap justify-center lg:justify-start">
            <NuxtLink
              v-for="item in items"
              :key="item"
              class="link pattern-link"
              :to="`/learn/${item}`"
            >
              {{ item }}
            </NuxtLink>
          </div>
        </section>

        <section>
          <h2 class="text-gray-600">Bookshelf</h2>
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
        </section>

        <section class="shadow-md rounded-lg p-4 larger">
          <div class="flex flex-col lg:flex-row lg:items-stretch">
            <img
              src="@/assets/images/me.jpg"
              alt="That's me!"
              class="h-32 mx-auto rounded-full lg:rounded-lg"
            />

            <div
              class="flex flex-col lg:justify-center mt-2 mx-0 lg:m-0 lg:mx-4"
            >
              <p class="text-center lg:text-left">
                <strong>João Francisco</strong>
              </p>

              <p class="text-center mb-4 lg:text-left">
                Master's Candidate @
                <span class="hidden lg:inline">University of São Paulo</span>
                <span class="lg:hidden">USP</span>
              </p>

              <p>
                I study microservices since mid 2018. I have some experience in
                teaching the subject, and there's a course up comming as part of
                <a
                  href="https://www.ime.usp.br/verao/index.php/turmas/descricao/393"
                  class="link"
                  target="_blank"
                >
                  <span class="lg:hidden">IME's</span>
                  <span class="hidden lg:inline">
                    Institute of Mathematics and Statistics'
                  </span>
                  summer school
                </a>
              </p>
            </div>
          </div>

          <p class="text-lg mt-4">Recent work</p>
          <NuxtLink
            v-for="{ title, route, order } of recentWork"
            :key="title"
            class="underline text-gray-600 mt-2"
            :to="route"
          >
            {{ order }}) {{ title }}
          </NuxtLink>
        </section>
      </div>
    </div>
  </LearnScaffold>
</template>

<style lang="postcss" scoped>
.link {
  @apply underline text-gray-600 my-1;
}

.pattern-link {
  @apply py-1 px-4 m-2;
  @apply bg-gray-600 text-white text-sm;
  @apply rounded-full no-underline;
}

.content {
  @apply flex flex-col justify-around;
}

.content > section {
  @apply flex flex-col;
  @apply my-4;
}

section > h2 {
  @apply text-xl font-bold mt-2 mb-4;
}

strong {
  @apply text-gray-600 text-xl;
}

@screen lg {
  .content {
    @apply flex-row flex-wrap;
  }

  .content > section {
    @apply w-2/5;
  }

  section.larger {
    @apply w-full;
  }
}
</style>

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
      return process.env.BOOK_SUGGESTIONS
    },
  },

  methods: {
    suggestBook() {
      this.bookSuggestion = ''
    },
  },
}
</script>
