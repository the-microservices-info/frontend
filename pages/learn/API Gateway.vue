<template>
  <PatternPage
    name="API Gateway"
    :src="require('@/assets/images/patterns/APIGateway.png')"
  >
    <template #problem>
      Consider you are developing an application that adopts Microservices.
      Then, this application has <strong>multiple addresses</strong>, one for
      each instance of each service. And all of this is
      <strong>constantly changing</strong>, either by services being removed or
      created, or by scaling up/down.
    </template>

    <template #solution>
      Implement a <strong>single interface</strong> for external clients that
      exposes the union of the services' interfaces.
    </template>

    <template #consequences>
      <ul>
        <li>
          external clients access an interface that
          <strong>abstracts the internal division</strong>.
        </li>
      </ul>
    </template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/pattern_page.css';
</style>
