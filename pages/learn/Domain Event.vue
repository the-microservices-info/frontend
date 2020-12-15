<template>
  <PatternPage
    name="Domain Event"
    :src="require('@/assets/images/patterns/DomainEvent.png')"
  >
    <template #problem>
      You're developing an application with microservices where
      <strong>each service has its own database</strong>
      , following
      <NuxtLink
        class="underline text-gray-600"
        to="/learn/Database per Service"
      >
        Database per Service.
      </NuxtLink>
      You need the data to be accessible for all interested services.
    </template>

    <template #solution>
      When a change in the service aggregate happens
      <strong>broadcast it to the application</strong>
      by emitting a <strong>Domain Event</strong>.
    </template>

    <template #consequences>
      <ul>
        <li>
          <strong>changes in data are broadcast</strong> all across the
          application, enabling <strong>eventual consistency</strong>
        </li>
        <li>
          <strong>goes along well with other patterns</strong>, such as
          <NuxtLink
            class="underline text-gray-600"
            to="/learn/Database per Service"
          >
            Database per Service,
          </NuxtLink>
          <NuxtLink class="underline text-gray-600" to="/learn/Saga">
            Saga,
          </NuxtLink>
          <NuxtLink
            class="underline text-gray-600"
            to="/learn/Asynchronous Messaging"
          >
            Asynchronous Messaging,
          </NuxtLink>
          and
          <NuxtLink class="underline text-gray-600" to="/learn/Event Sourcing">
            Event Sourcing.
          </NuxtLink>
        </li>
        <li>sustains <strong>eventual consistency</strong></li>
      </ul>
    </template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/pattern_page.css';
</style>
