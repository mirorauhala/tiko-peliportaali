<template>
  <tiko-bar
    :language="language"
    @languageChange="updateLanguage"
    @pageChange="updatePage"
  />
  <tiko-header
    :language="language"
    v-if="currentPage === 'games'"
  ></tiko-header>

  <tiko-small-header
    v-else
  ></tiko-small-header>

  <tiko-games
    :language="language"
    v-if="currentPage === 'games'"
  ></tiko-games>

  <tiko-about
    :language="language"
    v-if="currentPage === 'about'"
  ></tiko-about>

  <tiko-sponsors :language="language"></tiko-sponsors>
</template>

<script>
import TikoAbout from './components/TikoAbout.vue';
import TikoBar from './components/TikoBar.vue';
import TikoHeader from './components/TikoHeader.vue';
import TikoSmallHeader from './components/TikoSmallHeader.vue';
import TikoGames from './components/TikoGames.vue';
import TikoSponsors from './components/TikoSponsors.vue';

export default {
  name: 'App',
  components: {
    TikoAbout,
    TikoBar,
    TikoHeader,
    TikoSmallHeader,
    TikoGames,
    TikoSponsors,
  },
  data() {
    return {
      language: 'fi',
      currentPage: 'games',
      messages: {
        fi: {
          title: "20TIKO PELIPORTAALI - ELÄYTYEN OSALLISEKSI"
        },
        en: {
          title: "20TIKO GAME PORTAL - ELÄYTYEN OSALLISEKSI"
        }
      }
    }
  },
  mounted() {

    this.setAppLanguage();

    window.addEventListener('hashchange', this.setAppLanguage)
  },
  methods: {
    setAppLanguage() {
      this.language = window.location.hash === '#en' ? 'en' : 'fi';
      this.setWindowTitle();
    },

    setWindowTitle() {
      document.title = this.messages[this.language].title
    },

    updateLanguage() {
      let newLang = this.language === 'fi' ? 'en' : 'fi';
      history.pushState(null,null,'#' + newLang)
      this.language = newLang
      this.setWindowTitle()
    },

    updatePage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style lang="postcss">
#app {
  @apply font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
