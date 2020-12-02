<template>
  <main class="container mx-auto px-4 lg:px-40 mb-20 lg:mb-40">
    <h1 id="top" class="text-xl lg:text-2xl font-bold py-10 underline">
      Microservices Patterns Survey
    </h1>

    <SectionCard title="Oops...">
      <div class="min-h-56 flex flex-col justify-center items-center">
        <img
          src="~/assets/images/sad_face.png"
          alt="oops, something happened"
          class="h-20 mb-4"
        />
        <p class="lg:font-semibold">
          We're sorry, something happend on our side.
        </p>
        <p>Please write us an e-mail in case you need explanations.</p>
      </div>
    </SectionCard>

    <div class="mt-10 flex justify-center items-center">
      <NuxtLink to="/" class="btn btn-primary">Learn more!</NuxtLink>
    </div>
  </main>
</template>
