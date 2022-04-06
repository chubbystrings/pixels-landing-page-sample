<template>
  <div class="flex place-items-center py-5 px-3 rounded-3xl h-14 shadow-md w-auto cursor-pointer" @click="search" >
      <div class="flex items-center gap-3">
          <img src="/images/avatar.svg" class="h-10 w-10 rounded-full" />
          <p class="text-search">{{ tag }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['tag'],

    methods: {
        search() {
            this.$emit('clicked', tag)
        }
    }

}
</script>

<style scoped>

</style>