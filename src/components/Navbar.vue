<template>
  <nav :class="`${bgClass} nav`">
    <div
      :class="`flex items-center w-full ${
        bgClass === 'bg-transparent' ? 'justify-start' : 'justify-center'
      }`"
    >
      <div class="mr-2 lg:m-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="rounded-lg h-6 w-6 sm:h-10 sm:w-10"
        >
          <path
            d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
            fill="#05A081"
          ></path>
          <path
            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <div class="mr-5 ml-3 text-lg text-white lg:block hidden">Pixels</div>
      <search-input v-if="bgClass === 'bg-navigation'"></search-input>
    </div>
    <ul
      class="flex p-0 m-0 list-none items-center justify-center -mr-2 ml-auto box-content gap-5 text-white text-lg"
    >
      <li class="navbar-links relative">
        <div class="hover:text-gray-400" @mouseover="exploreDrop = true" @mouseleave="exploreDrop = false">Explore
        <dropdown :minWidth="150" v-if="exploreDrop">
          <template v-slot:content>
            <ul class="text-search text-sm">
              <li class="dropdown-list">Discover Photos</li>
              <li class="dropdown-list">Popular Searches</li>
              <li class="dropdown-list">Leaderboard</li>
              <li class="dropdown-list">Challenges</li>
              <li class="dropdown-list">Free Videos</li>
            </ul>
          </template>
        </dropdown>
        </div>
      </li>
      <li class="navbar-links">
        <div class="hover:text-gray-400">License</div>
      </li>
      <li class="navbar-links">
        <div class="hover:text-gray-400">Upload</div>
      </li>
      <li class="mr-2 hidden md:block relative" @mouseover="otherDrop = true" @mouseleave="otherDrop = false">
        <div>
          <button class="flex items-center cursor-pointer">
            <i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path
                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                ></path>
              </svg>
            </i>
          </button>
        <dropdown :minWidth="350" v-if="otherDrop">
          <template v-slot:content>
            <ul class="text-search text-sm">
              <li class="dropdown-list">Login</li>
              <li class="dropdown-list">Join</li>
              <li class="dropdown-list">Image & Video API</li>
              <li class="dropdown-list">Apps & Plugins</li>
              <li class="dropdown-list">FAQs</li>
              <li class="dropdown-list">Partnerships</li>
              <li class="dropdown-list">Imprints & Terms</li>
            </ul>
          </template>
          <template v-slot:footer>
            <div class="flex gap-10 justify-between p-2 text-search">
              <div class="hover:bg-gray-200 cursor-pointer">
                <img class="h-5 w-5" src="/images/facebook.svg" />
              </div>
              <div class="hover:bg-gray-200 cursor-pointer">
                <img class="h-5 w-5"  src="/images/twitter.svg" />
              </div>
              <div class="hover:bg-gray-200 cursor-pointer">
                <img class="h-5 w-5"  src="/images/instagram.svg" />
              </div>
              <div class="hover:bg-gray-200 cursor-pointer">
                <img class="h-5 w-5"  src="/images/pintrest.svg" />
              </div>
              <div class="hover:bg-gray-200 cursor-pointer">
                <img class="h-5 w-5"  src="/images/youtube.svg" />
              </div>
            </div>
          </template>
        </dropdown>
        </div>
      </li>
      <li class="mr-2 hidden md:block">
        <button class="bg-button px-5 py-1 text-white rounded-sm">Join</button>
      </li>
      <li class="md:hidden">
        <div class="px-4 cursor-pointer" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import SearchInput from "./ui/SearchInput.vue";
import Dropdown from "./ui/Dropdown.vue";

export default {
  name: "Navbar",
  props: ['mobileNavIsOpen'],
  data: () => ({
    bgClass: "bg-transparent",
    exploreDrop: false,
    otherDrop: false,
  }),

  components: {
    SearchInput,
    Dropdown,
  },

  methods: {
    enter() {
      this.exploreDrop = true
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }

      if (currentScrollPosition <= 5) {
        this.bgClass = "bg-transparent";
      } else {
        this.bgClass = "bg-navigation";
      }
    },

    handleClick() {
      this.$emit('toggleNav');
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  watch: {
    mobileNavIsOpen(val) {
      if (val) {
        this.bgClass = "bg-navigation";
      } else {
        this.bgClass = "bg-transparent";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
