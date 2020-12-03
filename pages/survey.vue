<template>
  <div>
    <ProgressBar />
    <main class="container mx-auto px-4 lg:px-40 mb-20 lg:mb-40">
      <h1 id="top" class="text-xl lg:text-2xl font-bold py-10 underline">
        Microservices Patterns Survey
      </h1>

      <Introduction />

      <BackgroundExperience />

      <MSPattern
        v-for="{ name, paragraphs, imageSrc } of patterns"
        :key="name"
        :name="name"
        :paragraphs="paragraphs"
        :image-src="imageSrc"
      />

      <PersonalInfo />

      <div class="mt-4 flex justify-center items-center">
        <button :class="btnClasses" :disabled="btnDisabled" @click="submit()">
          Submit
        </button>

        <a href="#top" class="btn btn-secondary">back to the top</a>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Introduction from '@/components/survey/introduction.vue'
import BackgroundExperience from '@/components/survey/background_experience.vue'
import MSPattern from '@/components/survey/pattern.vue'
import PersonalInfo from '@/components/survey/personal_info.vue'

import DatabasePerService from '@/assets/images/patterns/DatabasePerService.png'
import Saga from '@/assets/images/patterns/Saga.png'
import EventSourcing from '@/assets/images/patterns/EventSourcing.png'
import AsynchronousMessaging from '@/assets/images/patterns/AsynchronousMessaging.png'
import DomainEvent from '@/assets/images/patterns/DomainEvent.png'
import TransactionalOutbox from '@/assets/images/patterns/TransactionalOutbox.png'
import APIComposition from '@/assets/images/patterns/APIComposition.png'
import ServiceRegistry from '@/assets/images/patterns/ServiceRegistry.png'
import AdapterMicroservice from '@/assets/images/patterns/AdapterMicroservice.png'
import Ambassador from '@/assets/images/patterns/Ambassador.png'
import CQRS from '@/assets/images/patterns/CQRS.png'
import SelfContainedService from '@/assets/images/patterns/SelfContainedService.png'

export default {
  components: {
    Introduction,
    BackgroundExperience,
    MSPattern,
    PersonalInfo,
  },
  data: () => ({
    submitting: false,

    patterns: [
      {
        name: 'Database per Service',
        paragraphs: [
          `Each service has exclusive access to a database, therefore reducing shared data among the system. A private database stores data pertinent to the domain of its owner service.`,
          `This pattern improves autonomy and reduces coupling between microservices, as they don’t see each other’s databases. Microservices can still share the same physical database as long as there’s a logical separation (e.g. separate schemas or tablespaces). It’s also possible that different microservices use databases of different types.`,
        ],
        imageSrc: DatabasePerService,
      },
      {
        name: 'Saga',
        paragraphs: [
          `Handle transactions that span multiple services as a sequence of local transactions that, in the end, emit messages or events that trigger a transaction in another service. Also support undo operations (a.k.a. compensation) in your microservices.`,
          `It provides a way to deal with atomicity between microservices, addressing the transaction problem, while increasing the complexity of communication`,
        ],
        imageSrc: Saga,
      },
      {
        name: 'Event Sourcing',
        paragraphs: [
          `Handle the state of the system as streams of events that mark every change over the time, making possible to query events and access historical data to recover from failures.`,
          `Instead of storing the current state of an object in the database, we store the sequence of append-only, immutable events that affected that object. Current state is obtained by replaying events, and we do so to provide a “query view” of the data.`,
        ],
        imageSrc: EventSourcing,
      },
      {
        name: 'Asynchronous Messaging',
        paragraphs: [
          `Determine that communication model between internal parts of the system is based on asynchronous message-passing.`,
          `By storing messages exchanged in a buffer, there is less need to share databases. Furthermore, it reduces the coupling between microservices, since it decouples the message senders from the recipients. Despite these advantages, it depends a lot on a message broker (which must be very resilient)`,
        ],
        imageSrc: AsynchronousMessaging,
      },
      {
        name: 'Domain Event',
        paragraphs: [
          `Model business capabilities of services as DDD aggregates that emits events on every change in the state so that it can be consumed by other services`,
          `The use of domain events and DDD terminology allows decoupling the connection between microservices based on the domain. Furthermore, when creating a collection of aggregated data, the tendency is to decrease the need to share databases between different microservices`,
        ],
        imageSrc: DomainEvent,
      },
      {
        name: 'Transactional Outbox',
        paragraphs: [
          `Write events to an outbox within a local transaction when changing the state. Then another process can read the outbox and emit events to the system. This strategy overcomes when the message broker lacks support for message storage-and-forward.`,
          `A message outbox is injected into the persistence command, based on the atomicity of the database command. The outbox is then read through a separate process to publish to a broker. `,
        ],
        imageSrc: TransactionalOutbox,
      },
      {
        name: 'API Composition',
        paragraphs: [
          `Create a service dedicated to perform queries that span multiple services, in a join-like way.`,
          `When the data is separated into different microservices, it provides a way of unified consultation. On the other hand, it creates a service that is tightly coupled with others`,
        ],
        imageSrc: APIComposition,
      },
      {
        name: 'Service Registry',
        paragraphs: [
          `Create a service to keep track of addresses and copies of the rest of the services, providing an easy way to handle scalability.`,
          `The creation of a database that stores the microservices locations instances facilitates the discovery of such instances. On the other hand, a service (Registry) dependency is created, increasing the coupling. Furthermore, in the case of Registry failure, the problem of (eventual) data consistency arises`,
        ],
        imageSrc: ServiceRegistry,
      },
      {
        name: 'Adapter Microservice',
        paragraphs: [
          `Place a new microservice in between two others to adapt the provided API into the expected API.`,
          `A new microservice -- highly -- coupled with a legacy service is added. On the other hand, a new communication interface with the rest of the system is gained, which is more flexible and consistent with the microservices architectural style`,
        ],
        imageSrc: AdapterMicroservice,
      },
      {
        name: 'Ambassador',
        paragraphs: [
          `Create a new microservice that acts as a proxy dedicated to monitoring, logging, and other cross-cutting concerns and peripheral functionalities.`,
          `Peripheral functionalities are removed from the business logic process, which increases the dependency between microservices. On the other hand, the development process is favored since a microservice is created to act as a Proxy. This pattern can be considered to be a superset of the sidecar, the difference of which is that it does not necessarily follow the life cycle of the main application`,
        ],
        imageSrc: Ambassador,
      },
      {
        name: 'CQRS',
        paragraphs: [
          `Split reads and writes into separated services to possiblitate a better representation model for each operation. Each service can also scale independently from the other.`,
          `Increases scalability and decreases the coupling between microservices. However, it creates a new service responsible for the management of the historical database, which is shared with all microservices with "interest" in the domain, and which offers eventual consistency (since the Event Sourcing pattern is generally adopted in its implementation)`,
        ],
        imageSrc: CQRS,
      },
      {
        name: 'Self-Contained Service',
        paragraphs: [
          `Put the service to listen to and store events related to all data it depends, so that when requested it can simply reply without any request to other microservices.`,
          `By definition, it is a service that depends little on others, which reduces coupling but increases the microservices internal complexity`,
        ],
        imageSrc: SelfContainedService,
      },
    ],
  }),
  computed: {
    ...mapGetters(['formValid', 'answers']),
    btnDisabled() {
      return this.submitting || !this.formValid
    },
    btnClasses() {
      const base = ['btn', 'btn-primary']
      return this.btnDisabled ? base.concat('btn-disabled') : base
    },
  },
  methods: {
    async submit() {
      try {
        this.submitting = true
        await this.$axios.$post('/answers', this.answers)
        this.$router.replace('/success')
      } catch (e) {
        this.$router.replace('/oops')
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>
