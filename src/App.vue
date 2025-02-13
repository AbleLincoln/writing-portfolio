<script setup>
function parseLink(name) {
  return name.toLowerCase().split(' ').join('-')
}

const LINKS = {
  poems: [
    'Dinner Party',
    'When I lost my way',
    'The Crown of Seeds',
    'Ode to Lauren',
    'some questions',
    'An Altercation on Lincoln Boulevard',
  ],
  shorts: ['The Man in the High Window'],
}
</script>

<template>
  <main
    class="bg-emerald-900 text-white max-w-7xl m-auto pb-6 px-8 h-screen overflow-y-scroll"
  >
    <header
      class="sticky top-0 bg-emerald-900 pt-6 border-b border-white/50 pb-4 mb-6 sm:flex justify-between items-end"
    >
      <h1 class="text-5xl font-display">Andrew Maney</h1>
      <h2>maneyandrew [at] gmail [dot] com</h2>
    </header>

    <section class="grid sm:grid-cols-2 gap-4 gap-y-8">
      <ul class="flex flex-col text-lg">
        <li>
          poems
          <ul class="ml-8">
            <li v-for="link in LINKS.poems">
              <RouterLink
                :to="parseLink(link)"
                class="hover:underline"
                activeClass="underline"
              >
                {{ link }}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li>
          short stories
          <ul class="ml-8">
            <li v-for="link in LINKS.shorts">
              <RouterLink
                :to="parseLink(link)"
                class="hover:underline"
                activeClass="underline"
              >
                {{ link }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="">
        <RouterView />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
