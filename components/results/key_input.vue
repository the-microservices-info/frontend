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
        } = await this.$axios.get('/answers', {
          params: { key: this.passkey },
        })

        const {
          data: { backgroundExperience },
        } = await this.$axios.get('/answers/backgroundExperience', {
          params: { key: this.passkey },
        })

        const dbpsvc = await this.$axios.get('/answers/databasePerService', {
          params: { key: this.passkey },
        })

        const saga = await this.$axios.get('/answers/saga', {
          params: { key: this.passkey },
        })

        const eventSourcing = await this.$axios.get('/answers/eventSourcing', {
          params: { key: this.passkey },
        })

        const asynchronousMessaging = await this.$axios.get(
          '/answers/asynchronousMessaging',
          { params: { key: this.passkey } }
        )

        const domainEvent = await this.$axios.get('/answers/domainEvent', {
          params: { key: this.passkey },
        })

        const transactionalOutbox = await this.$axios.get(
          '/answers/transactionalOutbox',
          { params: { key: this.passkey } }
        )

        const apiComposition = await this.$axios.get(
          '/answers/apiComposition',
          { params: { key: this.passkey } }
        )

        const serviceRegistry = await this.$axios.get(
          '/answers/serviceRegistry',
          { params: { key: this.passkey } }
        )

        const adapterMicroservice = await this.$axios.get(
          '/answers/adapterMicroservice',
          { params: { key: this.passkey } }
        )

        const ambassador = await this.$axios.get('/answers/ambassador', {
          params: { key: this.passkey },
        })

        const cqrs = await this.$axios.get('/answers/cqrs', {
          params: { key: this.passkey },
        })

        const selfContainedService = await this.$axios.get(
          '/answers/selfContainedService',
          { params: { key: this.passkey } }
        )

        this.$emit('authorized', {
          answers,
          backgroundExperience,
          databasePerService: dbpsvc.data['Database per Service'],
          saga: saga.data.Saga,
          eventSourcing: eventSourcing.data['Event Sourcing'],
          asynchronousMessaging:
            asynchronousMessaging.data['Asynchronous Messaging'],
          domainEvent: domainEvent.data['Domain Event'],
          transactionalOutbox: transactionalOutbox.data['Transactional Outbox'],
          apiComposition: apiComposition.data['API Composition'],
          serviceRegistry: serviceRegistry.data['Service Registry'],
          adapterMicroservice: adapterMicroservice.data['Adapter Microservice'],
          ambassador: ambassador.data.Ambassador,
          cqrs: cqrs.data.CQRS,
          selfContainedService:
            selfContainedService.data['Self-Contained Service'],
        })
      } catch (e) {
        this.$emit('unauthorized')
      }
    },
  },
}
</script>
