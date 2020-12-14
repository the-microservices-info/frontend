<template>
  <LearnScaffold>
    <h1 class="text-4xl px-16 text-center font-bold">Database per Service</h1>

    <div class="content">
      <section>
        <h2>Problem</h2>
        <p>
          Consider you are developing a system that adopts Microservices. A
          subset of the <strong>services shares a namespace</strong>
          on the same physical database. Consider the data one service -- say
          service A -- manages. Without the knowledge of A, another service runs
          a transaction involving A's data. Now A is
          <strong>stucked waiting for an external process</strong> to finish, or
          worse: it's facing the
          <strong>inconsistency generated elsewhere</strong>.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          Enable
          <strong>
            each service to have its own isolated physical database
          </strong>
          , or to share the physical instance but not sharing its tablespace (or
          namespace).
        </p>

        <img
          src="@/assets/images/patterns/DatabasePerService.png"
          alt="Database per Service"
          class="mx-auto"
        />
      </section>

      <section>
        <h2>Consequences</h2>
        <ul>
          <li>
            now each <strong>service has total control of its data</strong>,
            without unexpected external influences;
          </li>
          <li>
            there might be the <strong>need to replicate data</strong> across
            multiple isolated database instances or namespaces;
          </li>
          <li>
            it's easier to adopt databases with
            <strong>different data models</strong> -- service A might use
            MongoDB, while service B uses PostgreSQL;
          </li>
          <li>
            it <strong>avoids single point of failure</strong>, since a failing
            database doesn't affect many services.
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
