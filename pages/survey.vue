<template>
  <div>
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
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: DatabasePerService,
      },
      {
        name: 'Saga',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: Saga,
      },
      {
        name: 'Event Sourcing',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: EventSourcing,
      },
      {
        name: 'Asynchronous Messaging',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: AsynchronousMessaging,
      },
      {
        name: 'Domain Event',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: DomainEvent,
      },
      {
        name: 'Transactional Outbox',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: TransactionalOutbox,
      },
      {
        name: 'API Composition',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: APIComposition,
      },
      {
        name: 'Service Registry',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: ServiceRegistry,
      },
      {
        name: 'Adapter Microservice',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: AdapterMicroservice,
      },
      {
        name: 'Ambassador',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: Ambassador,
      },
      {
        name: 'CQRS',
        paragraphs: ['foo bar baz', 'foo bar baz', 'foo bar baz'],
        imageSrc: CQRS,
      },
      {
        name: 'Self-Contained Service',
        paragraphs: [],
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
