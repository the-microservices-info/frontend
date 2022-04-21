<template>
  <PatternPage
    name="API Composition"
    :src="require('@/assets/images/patterns/APIComposition.png')"
  >
    <template #problem>
      In your microservices application, you implement
      <NuxtLink
        to="/learn/Database per Service"
        class="underline text-gray-600"
      >
        Database per Service
      </NuxtLink>
      and there is a query you need
      <strong>data that is spread in two services</strong> (or more).
    </template>
    <template #solution>
      Implement a service that
      <strong>composes other APIs into its own</strong>, from where the joint
      data can be queried.
    </template>
    <template #consequences>
      <ul>
        <li>
          <strong>
            saves customers from worrying about internal divisions
          </strong>
        </li>
        <li>performs a <strong>join operation outside of a DB</strong></li>
        <li>
          <strong>increases complexity to avoid failures</strong>, such as
          implementing strategies to handle failures within underneath services
        </li>
      </ul>
    </template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/pattern_page.css';
</style>

<script>
import PatternPage from '@/components/learn/pattern_page.vue'

export default {
  components: { PatternPage },
}
</script>
