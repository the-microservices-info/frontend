<template>
  <LearnScaffold>
    <h1 class="text-4xl px-16 text-center font-bold">{{ name }}</h1>

    <p v-if="hasCompleteName" class="text-sm text-center m-4 italic">
      {{ completeName }}
    </p>

    <div class="content">
      <section>
        <h2>Problem</h2>
        <p>
          <slot name="problem"></slot>
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          <slot name="solution"></slot>
        </p>

        <img :src="src" :alt="imageAlt" class="mx-auto" />
      </section>

      <section>
        <h2>Consequences</h2>
        <slot name="consequences"></slot>
      </section>
    </div>
  </LearnScaffold>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    completeName: {
      type: String,
      default: undefined,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    hasCompleteName() {
      return this.completeName !== undefined
    },
    imageAlt() {
      return this.alt === undefined ? this.name : this.alt
    },
  },
}
</script>

<style lang="postcss" scoped>
.content {
  @apply flex flex-col justify-around px-4;
}

.content > section {
  @apply flex flex-col;
  @apply my-4;
}

section > h2 {
  @apply text-xl font-bold mt-2 mb-4;
}

section > ul {
  @apply list-disc list-inside;
}

li {
  @apply my-2;
}

strong {
  @apply text-gray-600 text-xl;
}

@screen lg {
  section {
    @apply w-4/5 mx-auto;
  }
}
</style>
