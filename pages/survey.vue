<template>
  <div class="container mx-auto w-full px-4 lg:px-40">
    <h1 class="text-xl lg:text-2xl font-bold py-10 underline">
      Microservices Patterns Survey
    </h1>

    <Introduction />

    <BackgroundExperience />
  </div>
</template>

<script>
import Introduction from '@/components/survey/introduction.vue'
import BackgroundExperience from '@/components/survey/background_experience.vue'

export default {
  components: {
    Introduction,
    BackgroundExperience,
  },
}
</script>
