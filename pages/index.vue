<template>
  <div class="container mx-auto h-screen flex flex-col justify-center">
    <Logo class="mb-10 w-full px-4 lg:px-0 lg:w-2/3 lg:mx-auto" />

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
