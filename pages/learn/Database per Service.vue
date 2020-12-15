<template>
  <PatternPage
    name="Database per Service"
    :src="require('@/assets/images/patterns/DatabasePerService.png')"
  >
    <template #problem>
      Consider you are developing a system that adopts Microservices. A subset
      of the <strong>services shares a namespace</strong>
      on the same physical database. Consider the data one service -- say
      service A -- manages. Without the knowledge of A, another service runs a
      transaction involving A's data. Now A is
      <strong>stucked waiting for an external process</strong> to finish, or
      worse: it's facing the <strong>inconsistency generated elsewhere</strong>.
    </template>

    <template #solution>
      Enable
      <strong>each service to have its own isolated physical database</strong>,
      or to share the physical instance but not sharing its namespace.
    </template>

    <template #consequences>
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
          <strong>different data models</strong> -- service A might use MongoDB,
          while service B uses PostgreSQL;
        </li>
        <li>
          it <strong>avoids single point of failure</strong>, since a failing
          database doesn't affect many services.
        </li>
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
