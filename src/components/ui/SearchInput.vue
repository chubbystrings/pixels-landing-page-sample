<template>
  <form class="relative w-full transition duration-500 ease-out">
    <div
      :class="`flex bg-white rounded-md z-20 box-border max-w-2xl md:mr-5 input relative ${
        showTags ? 'rounded-b-none' : ''
      }`"
    >
      <div
        class="tag-wrapper relative"
        v-if="showTags"
      >
      <div class="absolute left-8 top-4">
        <p class="text-search text-sm">
          Trending Topics
        </p>
      </div>
        <Tag v-for="tag in tags" :key="tag" :tag="tag" />
      </div>
      <input
        type="search"
        placeholder="Search for free photos"
        required
        class="search"
        @focus="showTags = true"
        @blur="showTags = false"
      />
      <button
        class="btn"
      >
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#5e5e5e"
            class="h-5 w-5"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
        </i>
      </button>
    </div>
  </form>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  data: () => ({
    tags: [
      "happiness",
      "hotel",
      "Ramadan",
      "cars",
      "cat",
      "dog",
      "women",
      "restaurants",
      "buildings",
    ],
    showTags: false,
  }),
  components: {
    Tag,
  },
  methods: {},
};
</script>

<style scoped></style>
