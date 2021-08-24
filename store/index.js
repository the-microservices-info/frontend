const patterns = [
  {
    name: 'Database per Service',
    paragraphs: [
      `Each service has exclusive access to a database, therefore reducing shared data among the system. A private database stores data pertinent to the domain of its owner service.`,
      `This pattern improves autonomy and reduces coupling between microservices, as they don’t see each other’s databases. Microservices can still share the same physical database as long as there’s a logical separation (e.g. separate schemas or tablespaces). It’s also possible that different microservices use databases of different types.`,
    ],
    imageSrc: require('@/assets/images/patterns/DatabasePerService.png'),
  },
  {
    name: 'Saga',
    paragraphs: [
      `Handle transactions that span multiple services as a sequence of local transactions that, in the end, emit messages or events that trigger a transaction in another service. Also support undo operations (a.k.a. compensation) in your microservices.`,
      `It provides a way to deal with atomicity between microservices, addressing the transaction problem, while increasing the complexity of communication`,
    ],
    imageSrc: require('@/assets/images/patterns/Saga.png'),
  },
  {
    name: 'Event Sourcing',
    paragraphs: [
      `Handle the state of the system as streams of events that mark every change over the time, making it possible to sustain atomicity while also keeping data persistence.`,
      `Instead of storing the current state of an object in the database, we store the sequence of append-only, immutable events that affected that object. Current state is obtained by replaying events, and we do so to provide a “query view” of the data.`,
    ],
    imageSrc: require('@/assets/images/patterns/EventSourcing.png'),
  },
  {
    name: 'Asynchronous Messaging',
    paragraphs: [
      `Determine that communication model between internal parts of the system is based on asynchronous message-passing.`,
      `By storing messages exchanged in a buffer, there is less need to share databases. Furthermore, it reduces the coupling between microservices, since it decouples the message senders from the recipients. Despite these advantages, it depends a lot on a message broker (which must be very resilient)`,
    ],
    imageSrc: require('@/assets/images/patterns/AsynchronousMessaging.png'),
  },
  {
    name: 'Domain Event',
    paragraphs: [
      `Model business capabilities of services as DDD aggregates that emits events on every change in the state so that it can be consumed by other services`,
      `The use of domain events and DDD terminology allows decoupling the connection between microservices based on the domain. Furthermore, when creating a collection of aggregated data, the tendency is to decrease the need to share databases between different microservices`,
    ],
    imageSrc: require('@/assets/images/patterns/DomainEvent.png'),
  },
  {
    name: 'Transactional Outbox',
    paragraphs: [
      `Write events to an outbox within a local transaction when changing the state. Then another process can read the outbox and emit events to the system. This strategy overcomes when the message broker lacks support for message storage-and-forward.`,
      `A message outbox is injected into the persistence command, based on the atomicity of the database command. The outbox is then read through a separate process to publish to a broker. `,
    ],
    imageSrc: require('@/assets/images/patterns/TransactionalOutbox.png'),
  },
  {
    name: 'API Composition',
    paragraphs: [
      `Create a service dedicated to perform queries that span multiple services, in a join-like way.`,
      `When the data is separated into different microservices, it provides a way of unified consultation. On the other hand, it creates a service that is tightly coupled with others`,
    ],
    imageSrc: require('@/assets/images/patterns/APIComposition.png'),
  },
  {
    name: 'CQRS',
    paragraphs: [
      `Split reads and writes into separated services to possiblitate a better representation model for each operation. Each service can also scale independently from the other.`,
      `Increases scalability and decreases the coupling between microservices. However, it creates a new service responsible for the management of the historical database, which is shared with all microservices with "interest" in the domain, and which offers eventual consistency (since the Event Sourcing pattern is generally adopted in its implementation)`,
    ],
    imageSrc: require('@/assets/images/patterns/CQRS.png'),
  },
  {
    name: 'API Gateway',
    paragraphs: [
      `Provide a single access point to external clients by implementing an API Gateway, which will abstract the application's internal division.`,
      `As microservices are often dynamicaly routed and each expose a fine-grained interface, API Gateway provides an abstraction of this environment to external clients by standing as a single access point that handles request redirections.`,
    ],
    imageSrc: require('@/assets/images/patterns/APIGateway.png'),
  },
  {
    name: 'BFF',
    paragraphs: [
      `Provide a single and customized access point to each type of external client by implementing a set of Backends-for-Frontends (BFFs), each which will work as an API Gateway.`,
      `When taking into account the heterogenity of external clients, such as mobile, desktop, and web clients, each type might have its own constaints of request time, protocols, and data. BFFs enable developers to provide a well-fit API for each type of client.`,
    ],
    imageSrc: require('@/assets/images/patterns/BFFs.png'),
  },
  {
    name: 'Adapter Microservice',
    paragraphs: [
      `Place a new microservice in between two others to adapt the provided API into the expected API.`,
      `A new microservice -- highly -- coupled with a legacy service is added. On the other hand, a new communication interface with the rest of the system is gained, which is more flexible and consistent with the microservices architectural style`,
    ],
    imageSrc: require('@/assets/images/patterns/AdapterMicroservice.png'),
  },
]

const initialState = {
  introduction: {
    questions: {
      allowed: undefined,
    },
    isValid: false,
  },

  backgroundExperience: {
    isValid: false,
    questions: {
      knowledgeLevel: undefined,
      knowledgeSource: undefined,
      years: undefined,
    },
  },
}

patterns
  .map(({ name }) => name)
  .forEach((pattern) => {
    initialState[pattern] = {
      isValid: false,
      questions: {
        knowledgeType: undefined,
        isUsed: undefined,
        statements: undefined,
        comments: '',
      },
    }
  })

initialState.meta = { patterns }

export const state = () => ({ ...initialState })

export const getters = {
  metaPatterns(s) {
    return s.meta.patterns
  },
  formValid(s) {
    return Object.keys(s)
      .filter((sec) => sec !== 'meta')
      .every((section) => s[section].isValid)
  },
  answers(s) {
    return Object.keys(s)
      .filter((sec) => sec !== 'meta')
      .reduce((acc, section) => {
        acc[section] = { ...s[section].questions }

        const hasFalsyIsUsed =
          Object.keys(acc[section]).includes('isUsed') && !acc[section].isUsed

        if (hasFalsyIsUsed) {
          acc[section].comments = ''
          acc[section].statements = undefined
        }

        return acc
      }, {})
  },
  progress(s) {
    const n = Object.keys(s)
      .filter((sec) => sec !== 'meta')
      .reduce((acc, section) => {
        return s[section].isValid ? acc + 1 : acc
      }, 0)

    return n / Object.keys(s).filter((sec) => sec !== 'meta').length
  },
}

export const mutations = {
  setIntroductionAllow(s, allowed) {
    s.introduction.questions.allowed = allowed
  },
  setIntroductionValid(s) {
    s.introduction.isValid = true
  },
  setIntroductionInvalid(s) {
    s.introduction.isValid = false
  },

  setBackgroundExperienceKnowledgeLevel(s, level) {
    s.backgroundExperience.questions.knowledgeLevel = level
  },
  setBackgroundExperienceKnowledgeSource(s, source) {
    s.backgroundExperience.questions.knowledgeSource = source
  },
  setBackgroundExperienceYears(s, years) {
    s.backgroundExperience.questions.years = years
  },
  setBackgroundExperienceValid(s, valid) {
    s.backgroundExperience.isValid = valid
  },

  setPattern(s, { name, answers }) {
    s[name].questions = { ...answers }
  },
  setPatternValid(s, { name, valid }) {
    s[name].isValid = valid
  },

  resetState(s) {
    Object.keys(initialState).forEach((section) => {
      s[section] = initialState[section]
    })
  },
}
