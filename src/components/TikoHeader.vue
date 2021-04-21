<script>
export default {
  name: 'TikoHeader',
};
</script>

<template>
  <header class="bg-gradient p-3 pt-20 md:py-32">
    <div class="flex flex-col max-w-7xl mx-auto items-center">
      <div class="w-2/3">
        <h1
          class="text-5xl text-tuni font-bold text-center tracking-tight mb-5">
          Tietojenkäsittelijöiden peliportaali
        </h1>
        <p class="text-xl text-center mb-5">
          TAMKin tietojenkäsittelyn tutkinto-ohjelmassa ensimmäisen vuoden kevään peliprojektin
          peliportaali. TAMKin tietojenkäsittelyn tutkinto-ohjelmassa ensimmäisen vuoden kevään
          peliprojektin peliportaali.
        </p>
      </div>

      <div class="flex">
        <div
          class="flex items-center justify-center bg-white
          h-36 w-36 text-center rounded-2xl shadow m-2.5">
          <h2><span class="block text-tuni text-6xl mb-3 font-bold">73</span> tiimiä </h2>
        </div>

        <div
          class="flex items-center justify-center bg-white
          h-36 w-36 text-center rounded-2xl shadow m-2.5">
          <h2><span class="block text-tuni text-6xl mb-3 font-bold">73</span> opiskelijaa </h2>
        </div>

        <div
          class="flex items-center justify-center bg-white
          h-36 w-36 text-center rounded-2xl shadow m-2.5">
          <h2><span class="block text-tuni text-6xl mb-3 font-bold">73</span> peliä </h2>
        </div>
      </div>
    </div>
  </header>
</template>
