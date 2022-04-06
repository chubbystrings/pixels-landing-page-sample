<template>
  <header
    class="relative z-20 pb-20 pt-24 flex items-center"
  >
    <div
      class="absolute w-full h-full overflow-hidden top-0 right-0 left-0 bottom-0 text-white"
    >
      <img
        class="w-full h-full object-cover bg-navigation"
        src="/images/umbrella.jpg"
      />
    </div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 red-border w-full sm:w-auto box-border p-8 sm:p-0"
    >
      <h1 class="text-white text-lg md:text-5xl mb-3">
        The best free stock photos, royalty free images &amp; videos shared by
        creators.
      </h1>
      <search-input></search-input>
      <ul class="flex gap-2 text-white items-center mt-2 suggestion overflow-x-scroll">
        <li class="sm:font-bold font-normal text-xxs md:text-sm">Suggestion:</li>
        <li class="text-xxs sm:text-xs font-light">islamic</li>
        <li class="text-xxs sm:text-xs font-light">ramadan</li>
        <li class="text-xxs sm:text-xs font-light">happy birthday</li>
        <li class="text-xxs sm:text-xs font-light">dark</li>
        <li class="text-xxs sm:text-xs font-light">more</li>
      </ul>
    </div>
  </header>
</template>

<script>
import SearchInput from "./ui/SearchInput.vue";
export default {
  name: "Hero",
  components: {
    SearchInput,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    min-height: 500px;
    max-height: 650px;
}
header img {
  filter: brightness(50%);
}

</style>
