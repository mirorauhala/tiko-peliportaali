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
    }
  },
  mounted() {
    const storedLanguage = localStorage.getItem('language');
    if(storedLanguage) {
      this.language = storedLanguage;
    }
  },
  methods: {
    updateLanguage() {
      let newLang;
      if(this.language === 'fi') {
        newLang = 'en'
      } else {
        newLang = 'fi';
      }

      this.language = newLang;
      localStorage.setItem('language', newLang)
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
