<template>
  <LearnScaffold>
    <h1 class="text-4xl px-16 text-center font-bold">Saga</h1>

    <div class="content">
      <section>
        <h2>Problem</h2>
        <p>
          You're developing a system with multiple services and databases. You
          need to run a transaction that spans more than one of these services
          and DBs.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          Implement a Saga with
          <strong>do and undo operations as local transations</strong>
          in reaction to a chain of events.
        </p>

        <img
          src="@/assets/images/patterns/Saga.png"
          alt="Saga"
          class="mx-auto"
        />
      </section>

      <section>
        <h2>Consequences</h2>
        <ul>
          <li>
            it <strong>coordinates local transactions</strong> working as a
            distributes transation;
          </li>
          <li>
            it requires <strong>tolerance to eventual consistency</strong>.
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
