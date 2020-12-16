<template>
  <PatternPage :name="$route.params.id" :src="imageSrc">
    <template #problem>(page under construction)</template>
    <template #solution></template>
    <template #consequences></template>
  </PatternPage>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/pattern_page.css';
</style>

<script>
export default {
  computed: {
    imageSrc() {
      const noSpaceName = this.$route.params.id.replace(' ', '')
      return require(`@/assets/images/patterns/${noSpaceName}.png`)
    },
  },
}
</script>
