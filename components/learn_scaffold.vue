<template>
  <div class="container mx-auto">
    <aside :class="sideMenuClasses" class="z-10 lg:w-56 lg:pl-4">
      <div class="icon self-end lg:hidden" @click="menuHidden = true">
        <CloseIcon class="h-full w-auto" />
      </div>

      <NuxtLink class="underline text-gray-600" to="/">Home</NuxtLink>
      <NuxtLink
        v-if="showLearnMoreLink"
        to="/learn"
        class="underline text-gray-600"
      >
        Learn more
      </NuxtLink>

      <p class="text-lg mt-2 text-gray-600">More about the Patterns</p>
      <NuxtLink
        v-for="item in items"
        :key="item"
        class="underline text-gray-600 ml-4"
        :to="`/learn/${item}`"
      >
        {{ item }}
      </NuxtLink>
    </aside>
    <main class="lg:pl-56">
      <div
        class="icon bg-white sticky top-0 z-0 lg:hidden"
        @click="menuHidden = false"
      >
        <MenuIcon class="h-full w-auto" />
      </div>

      <slot :items="items"></slot>
    </main>
    <footer class="h-40 mt-4 bg-gray-800 flex justify-center items-center">
      <NuxtLink to="/">
        <p class="text-gray-100 font-bold text-sm">The Microservices Info</p>
      </NuxtLink>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    menuHidden: false,
  }),

  computed: {
    ...mapGetters({
      patterns: 'metaPatterns',
    }),

    sideMenuClasses() {
      const hiddenClasses = ['w-0', 'overflow-hidden']
      const displayClasses = ['w-56', 'pl-4']
      const base = [
        'bg-white',
        'fixed',
        'h-screen',
        'shadow-lg',
        'flex',
        'flex-col',
        'items-start',
      ]

      return this.menuHidden
        ? base.concat(hiddenClasses)
        : base.concat(displayClasses)
    },

    items() {
      return this.patterns.map(({ name }) => name)
    },

    showLearnMoreLink() {
      return this.$route.fullPath !== '/learn'
    },
  },

  created() {
    const instance = this
    setTimeout(() => (instance.menuHidden = !instance.menuHidden), 500)
  },
}
</script>

<style lang="postcss" scoped>
aside {
  transition: all 0.75s ease;
}

.icon {
  @apply p-3 h-12 w-12 rounded-b-lg rounded-r-lg;
}
</style>
