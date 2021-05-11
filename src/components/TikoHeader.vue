<script>
import games from "../games";

export default {
  name: 'TikoHeader',
  props: ['language'],

  data() {
    return {
      messages: {
        fi: {
          heading: 'Tietojenkäsittelijöiden peliportaali',
          subtitle: 'TAMKin tietojenkäsittelyn tutkinto-ohjelman ensimmäisen vuoden peliprojektin\n' +
            'peliportaali. Tehty osana Eläytyen Osalliseksi ESR -hanketta.',
          teams: 'tiimiä',
          students: 'opiskelijaa',
          games: 'peliä',
        },

        en: {
          heading: 'Computer scientist\'s game portal',
          subtitle: 'The game portal of TAMK\'s first year students in computer science. ' +
            'Made as a part of the Eläytyen Osalliseksi ESR -project.',
          teams: 'teams',
          students: 'students',
          games: 'games',
        }
      },
      games
    }
  }
};
</script>

<style lang="postcss">
.statistics {
  @apply flex mb-3;
}

.stat {
  @apply flex items-center justify-center bg-white h-20 w-20 md:h-36 md:w-36 text-center rounded-2xl shadow m-2.5;
}

.stat-number {
  @apply block text-tuni text-2xl md:text-6xl mb-1 md:mb-3 font-bold;
}

.heading {
  @apply text-2xl md:text-5xl text-tuni font-bold text-center tracking-tight mb-5;
}

.subtitle {
  @apply text-lg md:text-xl text-center mb-5;
}
</style>

<template>
  <header class="bg-gradient p-3 pt-10 md:py-32 mb-16">

    <div class="flex flex-col max-w-7xl mx-auto items-center">
      <div class="w-full md:w-2/3">
        <h1 class="heading" v-text="messages[language].heading"></h1>
        <p class="subtitle" v-text="messages[language].subtitle"></p>
      </div>

      <div class="statistics">
        <div class="stat">
          <h2><span class="stat-number">87</span> <span v-text="messages[language].students"></span></h2>
        </div>

        <div class="stat">
          <h2><span class="stat-number">19</span> <span v-text="messages[language].teams"></span></h2>
        </div>

        <div class="stat">
          <h2><span class="stat-number">19</span> <span v-text="messages[language].games"></span></h2>
        </div>
      </div>

      <a target="_blank" href="https://tuni.zoom.us/j/64660365038?pwd=eEFndzhSdUxsRDVUNS9JUlZaSGl5dz09"
        class="mt-5 bg-tuni text-center text-white rounded-full border-tuni p-5 px-10">Osallistu webinaariin</a>

      <p class="mt-2 text-center p-5 px-10 text-gray-500">Zoom passcode: 930728</p>
    </div>
  </header>
</template>
