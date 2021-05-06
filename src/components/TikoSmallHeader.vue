<script>
export default {
  name: 'TikoSmallHeader',
};
</script>

<style lang="postcss">
.heading {
  @apply text-2xl md:text-5xl text-tuni font-bold text-center tracking-tight mb-5;
}
</style>

<template>
  <header class="bg-gradient p-3 pt-10 md:py-20 mb-10">
    <div class="flex flex-col max-w-7xl mx-auto items-center">
      <div class="w-full md:w-2/3">
        <h1 class="heading"><slot></slot></h1>
      </div>
    </div>
  </header>
</template>
