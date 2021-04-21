<script>
export default {
  team: 'TikoGames',
  data() {
    return {
      games: [
        {
          id: 1,
          name: 'The name of the game goes here',
          team: '20tiko1a',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 2,
          name: 'The name of the game goes here',
          team: '20tiko1b',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 3,
          name: 'The name of the game goes here',
          team: '20tiko1c',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 4,
          name: 'The name of the game goes here',
          team: '20tiko1d',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 5,
          name: 'The name of the game goes here',
          team: '20tiko1e',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 6,
          name: 'The name of the game goes here',
          team: '20tiko1f',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 7,
          name: 'The name of the game goes here',
          team: '20tiko2a',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 8,
          name: 'The name of the game goes here',
          team: '20tiko2b',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 9,
          name: 'The name of the game goes here',
          team: '20tiko2c',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 10,
          name: 'The name of the game goes here',
          team: '20tiko2d',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 11,
          name: 'The name of the game goes here',
          team: '20tiko2e',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 12,
          name: 'The name of the game goes here',
          team: '20tiko2f',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 13,
          name: 'The name of the game goes here',
          team: '20tiko2g',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 14,
          name: 'The name of the game goes here',
          team: '20tiko3a',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 15,
          name: 'The name of the game goes here',
          team: '20tiko3b',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 16,
          name: 'The name of the game goes here',
          team: '20tiko3c',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 17,
          name: 'The name of the game goes here',
          team: '20tiko3d',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 18,
          name: 'The name of the game goes here',
          team: '20tiko3e',
          image: 'http://placekitten.com/1080/1080',
        },
        {
          id: 19,
          name: 'The name of the game goes here',
          team: '20tiko3f',
          image: 'http://placekitten.com/1080/1080',
        },
      ]
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
