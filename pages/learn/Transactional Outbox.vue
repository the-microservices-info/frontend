<template>
  <PatternPage
    name="Transactional Outbox"
    :src="require('@/assets/images/patterns/TransactionalOutbox.png')"
  >
    <template #problem>
      You're adopting microservices. Your application implements
      <NuxtLink to="/learn/Event Sourcing" class="underline text-gray-600">
        Event Sourcing
      </NuxtLink>
      and you want to guarantee atomicity between storing the newly created
      data, and the generation of an event.
    </template>
    <template #solution>
      Perform a
      <strong>local transaction to store the data and the event</strong>
      into an outbox collection. Let an <strong>external process</strong> to
      publish events from the Outbox.
    </template>
    <template #consequences>
      <ul>
        <li><strong>guarantees atomicity</strong> while publishing events</li>
        <li>
          <strong>increases deployment complexity</strong> since the external
          process needs to have access to the service's database
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
