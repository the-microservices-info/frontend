<template>
  <LearnScaffold>
    <h1 class="text-4xl px-16 text-center font-bold">CQRS</h1>

    <p class="text-sm m-4 italic">Command-Query Responsibility Seggregation</p>

    <div class="content">
      <section>
        <h2>Problem</h2>
        <p>
          Consider you are developing a system that adopts Microservices. For a
          given set of data, the read and write
          <strong>operations can each benefit from different models</strong>,
          either by the structure or by the demand level. For example, reading
          rates majors writting rates, or it's more performant to write to SQL
          database, while is more performant to read from NoSQL.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          <strong>
            Seggregate commands responsibilities from queries ones
          </strong>
          by implementing a service for each, with its own database. Keep data
          consistent by exchanging messsages when the data aggregate is updated.
        </p>

        <img
          src="@/assets/images/patterns/CQRS.png"
          alt="Command-Query Responsibility Seggregation"
          class="mx-auto"
        />
      </section>

      <section>
        <h2>Consequences</h2>
        <ul>
          <li>
            <strong>each operation can be independently scaled</strong> better
            supporting its demand;
          </li>
          <li>
            it <strong>raises the architecture complexity</strong> around that
            data aggregate;
          </li>
          <li>
            enables to adopt
            <strong>the best database model for each operation</strong>.
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
