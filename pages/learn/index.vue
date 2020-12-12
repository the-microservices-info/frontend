<template>
  <LearnScaffold #default="{ items }">
    <div class="px-4 lg:pl-56 lg:mt-4 flex flex-col lg:flex-row lg:flex-wrap">
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
        <p class="text-lg mt-2 text-gray-600 mb-8">More about the Patterns</p>
        <div class="flex flex-col lg:flex-row lg:flex-wrap">
          <NuxtLink
            v-for="item in items"
            :key="item"
            class="pattern-link"
            :to="`/learn/${item}`"
          >
            {{ item }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </LearnScaffold>
</template>

<script>
export default {
  data: () => ({
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
  }),
}
</script>

<style lang="postcss" scoped>
.pattern-link {
  @apply underline text-gray-600 my-1;
}

@screen lg {
  .pattern-link {
    @apply py-1 px-4 m-2 bg-gray-600 text-white text-center rounded-full no-underline;
  }
}
</style>
