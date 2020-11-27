<template>
  <SectionCard title="Database per Service">
    <PatternSection>
      <div class="flex flex-col">
        <img
          src="~/assets/images/patterns/Database per Service.png"
          alt="database per service representation"
          class="mx-auto"
        />

        <p v-for="par in paragraphs" :key="par" class="my-2">
          {{ par }}
        </p>
      </div>
    </PatternSection>
  </SectionCard>
</template>

<script>
export default {
  data: () => ({
    paragraphs: [
      `Each service has exclusive access to a database, therefore reducing shared data among the system. A private database stores data pertinent to the domain of its owner service.`,
      `This pattern improves autonomy and reduces coupling between microservices, as tehy don't see each other's databases. Microservices can still share the same physical database as long as there's a logical separation (e.g. separate schemas or tablespaces). It's also possible that different microservices use databases of different types.`,
    ],
  }),
}
</script>
