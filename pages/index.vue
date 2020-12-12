<template>
  <div class="container mx-auto h-screen flex flex-col justify-center">
    <h1
      class="mb-10 lg:mb-20 font-serif lg:w-1/3 mx-auto text-center font-bold text-5xl lg:text-6xl"
    >
      The Microservices Info
    </h1>

    <div class="mt-10 flex flex-col justify-center items-center">
      <nuxt-link to="/survey" class="btn btn-primary">
        Take the Survey
      </nuxt-link>
      <nuxt-link to="/learn" class="btn btn-secondary">
        Learn more about microservices
      </nuxt-link>
    </div>
  </div>
</template>
