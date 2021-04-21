<script>
export default {
  name: 'TikoHeader',
};
</script>

<style lang="postcss">
.statistics {
  @apply flex;
}

.stat {
  @apply flex items-center justify-center bg-white h-20 w-20 md:h-36 md:w-36 text-center rounded-2xl shadow m-2.5;
}

.stat-number {
  @apply block text-tuni text-2xl md:text-6xl mb-1 md:mb-3 font-bold;
}
</style>

<template>
  <header class="bg-gradient p-3 pt-20 md:py-32">

    <div class="flex flex-col max-w-7xl mx-auto items-center">
      <div class="w-full md:w-2/3">
        <h1 class="text-2xl md:text-5xl text-tuni font-bold text-center tracking-tight mb-5">
          Tietojenkäsittelijöiden peliportaali
        </h1>
        <p class="text-lg md:text-xl text-center mb-5">
          TAMKin tietojenkäsittelyn tutkinto-ohjelmassa ensimmäisen vuoden kevään peliprojektin
          peliportaali. TAMKin tietojenkäsittelyn tutkinto-ohjelmassa ensimmäisen vuoden kevään
          peliprojektin peliportaali.
        </p>
      </div>

      <div class="statistics">
        <div class="stat">
          <h2><span class="stat-number">73</span> tiimiä</h2>
        </div>

        <div class="stat">
          <h2><span class="stat-number">73</span> tiimiä</h2>
        </div>

        <div class="stat">
          <h2><span class="stat-number">73</span> tiimiä</h2>
        </div>
      </div>
    </div>
  </header>
</template>
