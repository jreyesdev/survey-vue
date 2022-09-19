<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Wow!</h1>
      </div>
    </template>
    <div class="bg-white py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h1 class="text-7xl font-semibold text-indigo-600">404</h1>
          <p
            class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
          >
            Page not found
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Sorry, we could not find the page you are looking for.
            <router-link
              class="text-indigo-600 font-semibold hover:underline"
              :to="{ name: 'Dashboard' }"
              >Click here</router-link
            >
            to return
          </p>
        </div>
      </div>
    </div>
  </PageComponent>
</template>

<script src="./NotFound.ts"></script>
