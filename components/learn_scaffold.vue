<template>
  <div>
    <aside :class="sideMenuClasses">
      <button class="btn btn-secondary self-end" @click="menuHidden = true">
        close
      </button>
    </aside>
    <main>
      <button class="btn btn-secondary" @click="menuHidden = false">
        menu
      </button>
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
}
</script>

<style lang="postcss" scoped>
aside {
  transition: all 0.75s ease;
}
</style>
