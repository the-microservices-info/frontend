<template>
  <PatternPage name="Saga" :src="require('@/assets/images/patterns/Saga.png')">
    <template #problem>
      You're developing a system with multiple services and databases. You need
      to run a transaction that spans more than one of these services and DBs.
    </template>

    <template #solution>
      Implement a Saga with
      <strong>do and undo operations as local transations</strong>
      in reaction to a chain of events.
    </template>

    <template #consequences>
      <ul>
        <li>
          it <strong>coordinates local transactions</strong> working as a
          distributes transation;
        </li>
        <li>it requires <strong>tolerance to eventual consistency</strong>.</li>
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
