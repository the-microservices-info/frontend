<template>
  <SectionCard title="Personal Information">
    <p
      v-for="section of disclaimer"
      :key="section"
      class="text-sm lg:text-lg text-justify mb-4"
    >
      {{ section }}
    </p>

    <SubsectionDivider />

    <Question question="What is your name?">
      <input
        id="person-name"
        v-model="person.name"
        type="text"
        class="text-input"
      />
    </Question>

    <SubsectionDivider />

    <Question question="What is your email?">
      <input
        id="person-email"
        v-model="person.email"
        type="text"
        class="text-input"
      />
    </Question>

    <SubsectionDivider />

    <Question
      question="Are you available for being contacted for a follow-up conversation?"
    >
      <div class="option">
        <input
          id="available-true"
          v-model="person.available"
          type="radio"
          :value="true"
        />
        <label for="available-true">Yes</label>
      </div>

      <div class="option">
        <input
          id="available-false"
          v-model="person.available"
          type="radio"
          :value="false"
        />
        <label for="available-false">No</label>
      </div>
    </Question>
  </SectionCard>
</template>

<script>
export default {
  data: () => ({
    disclaimer: [
      `It is possible that some of the answers of the previous sections particularly raise our attention and there might be some follow-up.`,
      `This section, we gather information to enable that.`,
      `> All questions in this section are **optional**`,
      `> None of this information will be published or used for any other purpose.`,
    ],
    person: {
      name: '',
      email: '',
      available: undefined,
    },
  }),
}
</script>

<style lang="postcss" scoped>
.text-input {
  @apply w-full border rounded-md;
  @apply h-10;
}

@screen lg {
  .text-input {
    @apply w-1/2 h-8;
  }
}
</style>
