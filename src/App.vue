<template>
  <tiko-bar></tiko-bar>
  <tiko-header></tiko-header>
  <tiko-games></tiko-games>
  <tiko-sponsors></tiko-sponsors>
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
};
</script>

<style lang="postcss">
#app {
  @apply font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
