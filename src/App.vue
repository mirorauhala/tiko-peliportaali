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
  methods: {
    updateLanguage() {
      if(this.language === 'fi') {
        this.language = 'en'
      } else {
        this.language = 'fi';
      }
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
