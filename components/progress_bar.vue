<template>
  <div :class="pBarClasses"></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['progress']),
    pBarClasses() {
      const base = ['h-2', 'bg-blue-800', 'fixed']

      return base.concat(`w-${this.progress}`)
    },
  },
}
</script>

<style lang="postcss" scoped>
.w-0of14 {
  width: 0%;
}

.w-1of14 {
  width: 7%;
}

.w-2of14 {
  width: 14%;
}

.w-3of14 {
  width: 21%;
}

.w-4of14 {
  width: 28%;
}

.w-5of14 {
  width: 35%;
}

.w-6of14 {
  width: 42%;
}

.w-7of14 {
  width: 49%;
}

.w-8of14 {
  width: 56%;
}

.w-9of14 {
  width: 63%;
}

.w-10of14 {
  width: 70%;
}

.w-11of14 {
  width: 77%;
}

.w-12of14 {
  width: 84%;
}

.w-13of14 {
  width: 92%;
}

.w-14of14 {
  width: 100%;
}
</style>
