<template>
  <div class="h-2 bg-blue-800 fixed" :style="pBarStyle"></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['progress']),
    pBarStyle() {
      return { width: this.progress * 100 + '%' }
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  transition: width 0.75s ease;
}
</style>
