<template>
  <PatternPage
    name="Adapter Microservice"
    :src="require('@/assets/images/patterns/AdapterMicroservice.png')"
  >
    <template #problem></template>
    <template #solution></template>
    <template #consequences></template>
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
