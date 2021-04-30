<template>
  <tiko-bar
    :language="language"
    @languageChange="updateLanguage"

  />
  <tiko-header :language="language"></tiko-header>
  <tiko-games :language="language"></tiko-games>
  <tiko-sponsors :language="language"></tiko-sponsors>
</template>

<script>
import TikoBar from './components/TikoBar.vue';
import TikoHeader from './components/TikoHeader.vue';
import TikoGames from './components/TikoGames.vue';
import TikoSponsors from './components/TikoSponsors.vue';

export default {
  name: 'App',
  components: {
    TikoBar,
    TikoHeader,
    TikoGames,
    TikoSponsors,
  },
  data() {
    return {
      language: 'fi',
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
