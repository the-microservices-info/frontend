<template>
  <PatternPage
    name="Event Sourcing"
    :src="require('@/assets/images/patterns/EventSourcing.png')"
  >
    <template #problem>
      You are developing a system where services need to be able to access not
      only the current state, but also need to access historical states to, say,
      recover from a failure.
    </template>

    <template #solution>
      <strong>Store a historical sequence of events</strong> that represents
      changes to the state, with an API that allows fetching data from any
      moment in time.
    </template>

    <template #consequences>
      <ul>
        <li>it enables <strong>access to any historical data</strong>;</li>
        <li>
          it requires
          <strong>processing to acheive the historical state</strong>
        </li>
        <li>
          <strong>plays along well with other patterns</strong>, such as
          <NuxtLink class="underline text-gray-600" to="/learn/CQRS">
            CQRS
          </NuxtLink>
          and
          <NuxtLink
            class="underline text-gray-600"
            to="/learn/Asynchronous Messaging"
          >
            Asynchronous Messaging
          </NuxtLink>
          ,
          <NuxtLink class="underline text-gray-600" to="/learn/Domain Event">
            Domain Event
          </NuxtLink>
        </li>
      </ul>
    </template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/pattern_page.css';
</style>
