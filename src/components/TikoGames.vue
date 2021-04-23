<script>
import games from '../games';

export default {
  name: 'TikoGames',
  props: ['language'],

  data() {
    return {
      query: '',
      messages: {
        fi: {
          heading: 'Pelit',
          searchPlaceholder: 'Hae pelejä tai tiimiä...',
          noResultsHeading: 'Hakusi ei tuottanut tuloksia'
        },
        en: {
          heading: 'Games',
          searchPlaceholder: 'Search games or team name...',
          noResultsHeading: 'Your search returned no results'
        }
      },
      games
    }
  },
  computed: {
    resultQuery(){
      if(this.games){
        return this.games.filter(game => {
          return this.query.toLowerCase().split(' ').every(v => game.name.toLowerCase().includes(v) || game.team.toLowerCase().includes(v))
        })
      }else{
        return this.games;
      }
    }
  }
};
</script>

<template>
  <section class="max-w-7xl mx-auto mb-12">
    <div class="px-1.5 xl:px-0 mb-3 md:mb-5">
      <h1 class="text-4xl font-bold mb-5 text-center" v-text="messages[language].heading"></h1>
      <input
        type="text"
        v-model="query"
        class="text-lg md:text-xl px-3 md:px-6 w-full h-16 md:h-20 border-4 border-opacity-20 border-black transition delay-100
        ease-out focus:text-tuni focus:outline-none focus:border-tuni"
        :placeholder="messages[language].searchPlaceholder">
    </div>

    <div class="xl:-m-1.5">
      <template v-if="resultQuery.length > 0">

        <div class="flex flex-wrap justify-center min-h-full">
          <article
            class="w-full md:w-1/3 mb-3 md:mb-5 hover:text-tuni"
            v-for="game in resultQuery">
            <a class="block p-1.5" :href="game.link" target="_blank">
              <img :src="game.image" class="mb-2" alt="">
              <h1 class="text-xl font-bold tracking-tight" v-text="game.name"></h1>
              <p class="uppercase opacity-80 tracking-tight" v-text="game.team"></p>
            </a>
          </article>
        </div>
      </template>

      <div class="flex flex-wrap justify-center min-h-full" v-else>
        <div class="h-36 md:h-96 w-full flex items-start justify-center p-1.5">
          <div class="w-full md:w-4/6	rounded-2xl bg-gray-100 mt-3 md:mt-10 p-10">
            <h1 class="text-xl font-bold text-gray-800 text-center" v-text="messages[language].noResultsHeading"></h1>
          </div>
          <p></p>
        </div>
      </div>

    </div>
  </section>
</template>
