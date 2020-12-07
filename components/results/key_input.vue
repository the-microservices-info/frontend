<template>
  <div class="flex flex-col justify-center h-screen items-center">
    <label for="key" class="font-bold">Access key:</label>
    <input
      id="key"
      v-model="passkey"
      type="password"
      class="border border-gray-600 rounded-full px-2 py-1 my-4 focus:outline-none"
      @keydown.enter="access"
    />
    <button
      class="btn btn-primary"
      :disabled="passkey.length == 0"
      @click="access"
    >
      Access!
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    passkey: '',
  }),
  methods: {
    async access() {
      try {
        const {
          data: { answers },
        } = await this.$axios.get('http://localhost:3030/answers', {
          params: { key: this.passkey },
        })

        const {
          data: { backgroundExperience },
        } = await this.$axios.get(
          'http://localhost:3030/answers/backgroundExperience',
          { params: { key: this.passkey } }
        )

        this.$emit('authorized', {
          answers,
          backgroundExperience,
        })
      } catch (e) {
        this.$emit('unauthorized')
      }
    },
  },
}
</script>
