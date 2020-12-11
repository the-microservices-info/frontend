<template>
  <div>
    <aside :class="sideMenuClasses" class="lg:w-56">
      <div class="icon self-end lg:hidden" @click="menuHidden = true">
        <CloseIcon class="h-full w-auto" />
      </div>
    </aside>
    <main>
      <div class="icon lg:hidden" @click="menuHidden = false">
        <MenuIcon class="h-full w-auto" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuHidden: false,
  }),

  computed: {
    sideMenuClasses() {
      const hiddenClasses = ['w-0', 'overflow-hidden']
      const displayClasses = ['w-56']
      const base = [
        'bg-white',
        'absolute',
        'h-screen',
        'shadow-lg',
        'flex',
        'flex-col',
        'items-start',
      ]

      return this.menuHidden
        ? base.concat(hiddenClasses)
        : base.concat(displayClasses)
    },
  },

  created() {
    const instance = this
    setTimeout(() => (instance.menuHidden = true), 500)
  },
}
</script>

<style lang="postcss" scoped>
aside {
  transition: all 0.75s ease;
}

.icon {
  @apply p-3 h-12 w-12;
}
</style>
