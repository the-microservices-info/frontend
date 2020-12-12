<template>
  <LearnScaffold>
    <div class="px-4 pt-8">
      <h1 class="text-2xl text-center">
        <span class="font-bold">
          {{ title }}
        </span>
        {{ subtitle }}
      </h1>

      <div class="mt-4 w-full flex flex-col lg:flex-row lg:justify-around">
        <div
          v-for="{ name, institution } of authors"
          :key="name"
          class="my-2 pl-1 border-0 border-l-4 rounded-md border-gray-600"
        >
          <p class="font-bold">{{ name }}</p>
          <p class="text-sm">{{ institution }}</p>
        </div>
      </div>

      <div class="my-4 flex flex-col lg:flex-row lg:flex-wrap justify-around">
        <section class="reduced">
          <h2>Abstract</h2>
          <p class="italic text-justified break-words text-sm">
            {{ abstract }}
          </p>
        </section>

        <section class="reduced">
          <h2>Context</h2>
          <p>
            Architects must be able to make
            <strong>difficult decisions</strong> in
            <strong>uncertain and ambiguous contexts</strong>. Such decisions
            have <strong>long-lasting impact</strong> on different aspects, such
            as:
          </p>

          <ul>
            <li>
              <strong>Structural design</strong> and
              <strong>architectural elements</strong> of implementation;
            </li>

            <li>
              <strong>Quality attributes</strong> (performance, reusability,
              testability and security).
            </li>
          </ul>

          <p>
            Each design decision generates <strong>trade-offs</strong>. To
            choose the <strong>most appropriate</strong> architectural pattern,
            it is necessary <strong>to know</strong> the pattern
            <strong>characteristics</strong>, <strong>strengths</strong> and
            <strong>weaknesses</strong>.
          </p>

          <p>
            There are strong <strong>many architectural patterns</strong>, there
            is a <strong>lack of knowledge</strong> about available patterns.
          </p>
        </section>
      </div>

      <div class="my-4 lg:mx-auto lg:w-3/5 flex flex-col">
        <section>
          <h2>Objective</h2>
          <p class="text-center p-4 text-lg">
            To present a <strong>systematic technique</strong> to identify
            <strong>architectural patterns</strong> that
            <strong>affect</strong> a given set of
            <strong>quality attributes</strong>.
          </p>
        </section>

        <section>
          <h2>The Method for Architectural Trade-off Analysis</h2>

          <img
            src="@/assets/images/pattern-trade-off-method-steps.png"
            alt="steps of the method"
            class="rounded-full lg:p-10 lg:h-auto"
          />
          <p class="img-caption">Fig. 1 - Steps of the method</p>

          <p>The proposed method consists of 5 steps, as follows:</p>

          <ol>
            <li><strong>Step 1</strong> - Define the analysis objetive</li>
            <li>
              <strong>Step 2</strong> - Select pattern collections sources
            </li>
            <li><strong>Step 3</strong> - Choose quality attributes</li>
            <li><strong>Step 4</strong> - Select the patterns</li>
            <li><strong>Step 5</strong> - Check the trade-offs</li>
          </ol>
        </section>

        <section>
          <h2>Results</h2>

          <p>
            In this paper, the method was applied as a demonstration of its
            usage and the chosen context was microservices patterns. As part of
            the results, two diagrams were developed: the
            <strong>Patterns Diagram</strong>, representing all patterns
            selected, with the relationships between them, and the
            <strong>Trade-Off Diagram</strong>, placing each pattern into a
            trade-off zone.
          </p>

          <img
            src="@/assets/images/patterns-diagram.png"
            alt="patterns analysed"
            class="mt-4 lg:p-10 lg:h-auto"
          />

          <p class="img-caption">
            Fig. 2 - The Patterns Diagram, inspired by
            <a
              href="https://microservices.io/patterns/index.html"
              class="underline text-gray-600"
              target="_blank"
            >
              microservices.io
            </a>
          </p>

          <img
            src="@/assets/images/trade-offs-diagram.png"
            alt="trade-off represented"
            class="mt-4 lg:p-10 lg:h-auto"
          />

          <p class="img-caption">Fig. 3 - The Trade-Off Diagram</p>
        </section>
      </div>
    </div>
  </LearnScaffold>
</template>

<style lang="postcss" scoped>
ul li {
  @apply list-disc list-inside;
}

strong {
  @apply text-gray-600;
}

section {
  @apply my-4;
}

section h2 {
  @apply text-lg;
}

section p.img-caption {
  @apply text-sm text-center mb-8 mt-1;
}

@screen lg {
  section.reduced {
    @apply w-2/5;
  }
}
</style>

<script>
export default {
  data: () => ({
    title: 'A Method for Architectural Trade-off Analysis Based on Patterns:',
    subtitle: 'Evaluating Microservices Structural Attributes',
    authors: [
      {
        name: 'Thatiane Rosa',
        institution: `University of São Paulo and Federal Institute of Tocantins`,
      },
      {
        name: 'João Daniel',
        institution: 'University of São Paulo',
      },
      {
        name: 'Eduardo Guerra',
        institution: 'Free University of Bozen-Bolzano',
      },
      {
        name: 'Alfredo Goldman',
        institution: 'University of São Paulo',
      },
    ],
    abstract: `Architectural patterns are powerful tools that assist software
    architects in the decision-making process, as they enable to identify
    the software domain, to satisfy quality attributes, and to create
    large-scale reuse design techniques. However, choosing the most
    appropriate patterns for a given project is a difficult task, because
    while there is a wide range of patterns, there is a lack of knowledge about
    them, among software architects. In order to mitigate
    this problem, we developed a systematic method for architectural
    trade-off analysis based on patterns. In order to demonstrate the
    application of this method, we conducted a study to identify architectural
    patterns of microservices that influence structural design
    decisions related to the size of services, database sharing, and level
    of service coupling. All in all, this method helps software architects
    to identify and understand the patterns that best suit the project
    needs, and that can guide the architecture in the desired direction.`,
  }),
}
</script>
