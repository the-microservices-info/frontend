<template>
  <PatternPage
    name="Asynchronous Messaging"
    :src="require('@/assets/images/patterns/AsynchronousMessaging.png')"
  >
    <template #problem>
      You're developing a microservices application. Your services need to
      exchange information and synchronous requests results in a undesired high
      coupling level.
    </template>

    <template #solution>
      Implement a <strong>message broker for inner communication</strong>, such
      as
      <a
        href="https://kafka.apache.org/"
        class="underline text-gray-600"
        target="_blank"
      >
        Apache Kafka
      </a>
      or
      <a
        href="https://nats.io/"
        class="underline text-gray-600"
        target="_blank"
      >
        NATS
      </a>
      , and let your services publish and subscribe for asynchronous messages.
    </template>

    <template #consequences>
      <ul>
        <li>
          it provides a
          <strong>low coupling mean of communication</strong> which supports
          microservices design constraints;
        </li>
        <li>it sustain <strong>eventual consistency</strong> for data.</li>
      </ul>
    </template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
section > ul {
  @apply list-disc list-inside;
}

li {
  @apply my-2;
}

strong {
  @apply text-gray-600 text-xl;
}
</style>
