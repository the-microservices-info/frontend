<template>
  <PatternPage :name="$route.params.id" src="">
    <template #problem></template>
    <template #solution></template>
    <template #consequences></template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/pattern_page.css';
</style>
