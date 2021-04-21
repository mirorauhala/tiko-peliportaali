<script>
import games from '../games';
export default {
  team: 'TikoGames',
  data() {
    return {
      games
    }
  }
};
</script>

<template>
  <section class="max-w-7xl mx-auto mb-12">
    <div class="mb-3">
      <h1 class="text-4xl font-bold mb-5 text-center">Pelit</h1>
      <input
        type="text"
        class="text-xl px-6 w-full h-20 border-4 border-opacity-20 border-black transition delay-100
        ease-out focus:text-tuni focus:outline-none focus:border-tuni" placeholder="Hae pelejä...">
    </div>

    <div class="-m-1.5">

      <div class="flex flex-wrap justify-center">
        <article
          class="w-1/3"
          v-for="game in this.games">
          <a class="block p-1.5" href="#" target="_blank">
            <div class="mb-2">
              <img :src="game.image" alt="">
            </div>
            <h1 class="text-xl font-bold tracking-tight" v-text="game.name"></h1>
            <p class="uppercase opacity-80 tracking-tight" v-text="game.team"></p>
          </a>
        </article>

      </div>
    </div>
  </section>
</template>
