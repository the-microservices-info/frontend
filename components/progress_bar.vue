<template>
  <div
    class="wrapper h-2 bg-blue-100 border-2 border-blue-200 w-full fixed rounded-full"
  >
    <div :class="pBarClasses" :style="pBarStyle"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['progress']),
    pBarStyle() {
      return { width: this.progress * 100 + '%' }
    },
    pBarClasses() {
      let color = 'bg-red-600'

      if (this.progress > 0.2) color = 'bg-orange-500'
      if (this.progress > 0.98) color = 'bg-green-600'

      return ['h-full', 'rounded-full'].concat(color)
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  transition: all 0.75s ease;
}
</style>
