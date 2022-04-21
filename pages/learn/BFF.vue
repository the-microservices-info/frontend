<template>
  <PatternPage
    name="BFF"
    complete-name="Backends for Frontends"
    :src="require('@/assets/images/patterns/BFFs.png')"
    alt="Backends for Frontends"
  >
    <template #problem>
      Consider you are developing an application that adopts Microservices.
      Then, this application has <strong>multiple addresses</strong>, one for
      each instance of each service. And all of this is
      <strong>constantly changing</strong>, either by services being removed or
      created, or by scaling up/down. Furthermore, this application has
      <strong>many different types of clients</strong>, such as web, mobile and
      even a public API, each with its own specific requirements of time
      tolerance, protocols, and data.
    </template>

    <template #solution>
      Implement
      <strong>
        multiple
        <NuxtLink class="underline text-gray-600" to="/learn/API Gateway">
          API Gateways
        </NuxtLink>
        ,
      </strong>
      one for each type of client.
    </template>

    <template #consequences>
      <ul>
        <li>
          external clients access an interface that
          <strong>abstracts the internal division</strong>;
        </li>
        <li>
          each type of client deals with an interface that
          <strong>fits well its needs</strong>.
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
