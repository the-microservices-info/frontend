<template>
  <LearnScaffold>
    <h1 class="text-4xl px-16 text-center font-bold">Event Sourcing</h1>

    <div class="content">
      <section>
        <h2>Problem</h2>
        <p>
          You are developing a system where services need to be able to access
          not only the current state, but also need to access historical states
          to, say, recover from a failure.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          <strong>Store a historical sequence of events</strong> that represents
          changes to the state, with an API that allows fetching data from any
          moment in time.
        </p>

        <img
          src="@/assets/images/patterns/EventSourcing.png"
          alt="Event Sourcing"
          class="mx-auto"
        />
      </section>

      <section>
        <h2>Consequences</h2>
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
      </section>
    </div>
  </LearnScaffold>
</template>

<style lang="postcss" scoped>
.content {
  @apply flex flex-col justify-around px-4;
}

.content > section {
  @apply flex flex-col;
  @apply my-4;
}

section > h2 {
  @apply text-xl font-bold mt-2 mb-4;
}

section > ul {
  @apply list-disc list-inside;
}

li {
  @apply my-2;
}

strong {
  @apply text-gray-600 text-xl;
}

@screen lg {
  section {
    @apply w-4/5 mx-auto;
  }
}
</style>
