<template>
  <PatternPage
    name="CQRS"
    complete-name="Command-Query Responsibility Seggregation"
    :src="require('@/assets/images/patterns/CQRS.png')"
    alt="Command-Query Responsibility Seggregation"
  >
    <template #problem>
      Consider you are developing a system that adopts Microservices. For a
      given set of data, the read and write
      <strong>operations can each benefit from different models</strong>, either
      by the structure or by the demand level. For example, reading rates majors
      writting rates, or it's more performant to write to SQL database, while is
      more performant to read from NoSQL.
    </template>

    <template #solution>
      <strong>Seggregate commands responsibilities from queries ones</strong>
      by implementing a service for each, with its own database. Keep data
      consistent by exchanging messsages when the data aggregate is updated.
    </template>

    <template #consequences>
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
