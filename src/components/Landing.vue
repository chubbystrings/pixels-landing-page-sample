<template>
  <div class="relative">
    <Navbar @toggleNav="openMobileNav" :mobileNavIsOpen="mobileNavIsOpen" />
    <MobileNav v-if="mobileNavIsOpen" />
    <Hero />
    <div
      class="second-nav"
    >
      <div>
        <a
          href="#"
          @click="setIsActive"
          :class="`text-lg py-4 hover:text-active font-bold ${
            isActive === 'Home' ? activeClass : ''
          }`"
          >Home</a
        >
      </div>
      <div>
        <a
          href="#"
          @click="setIsActive"
          :class="`text-lg py-4 hover:text-active font-bold ${
            isActive === 'Discover' ? activeClass : ''
          }`"
          >Discover</a
        >
      </div>
      <div>
        <a
          href="#"
          @click="setIsActive"
          :class="`text-lg py-4 hover:text-active font-bold ${
            isActive === 'Videos' ? activeClass : ''
          }`"
          >Videos</a
        >
      </div>
      <div>
        <a
          href="#"
          @click="setIsActive"
          :class="`text-lg py-4 hover:text-active font-bold ${
            isActive === 'Leaderboard' ? activeClass : ''
          }`"
          >Leaderboard</a
        >
      </div>
      <div>
        <a
          href="#"
          @click="setIsActive"
          :class="`text-lg py-4 hover:text-active font-bold ${
            isActive === 'Challenge' ? activeClass : ''
          }`"
          >Challenge</a
        >
      </div>
    </div>
    <div class="py-4 px-8">
      <div class="flex justify-between items-center mt-4 mb-3">
        <h3 class="text-xxs sm:text-lg">Free Stock Photos</h3>
        <div class="flex justify-between items-center gap-3">
          <small class="text-xxs sm:text-xs">Trending</small>
          <div
            class="relative cursor-pointer"
            @mouseover="trendingDrop = true"
            @mouseleave="trendingDrop = false"
          >
            <img src="/images/down-arrow.svg" class="h-4" alt="dropdown icon" />
            <dropdown :minWidth="250" v-if="trendingDrop">
              <template v-slot:content>
                <ul class="text-search text-sm">
                  <li class="dropdown-list">Trending</li>
                  <li class="dropdown-list">New</li>
                </ul>
              </template>
            </dropdown>
          </div>
        </div>
      </div>
      <div class="masonry">
        <ImageCard
          v-for="(image, i) in pictures"
          :key="i"
          :height="image.webformatHeight"
          :imageDetails="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Hero from "./Hero.vue";
import ImageCard from "./ui/ImageCard.vue";
import Dropdown from "./ui/Dropdown.vue";
import axiosInstance from "../services/axios";
import MobileNav from './ui/MobileOverlay.vue';

export default {
  name: "Landing",
  data: () => ({
    isActive: "Home",
    min: 400,
    max: 550,
    activeClass: "border-b-4 border-active text-active",
    trendingDrop: false,
    pictures: [],
    page: 1,
    totalPages: null,
    searchTerm: "",
    mobileNavIsOpen: false,
  }),
  components: {
    Navbar,
    Hero,
    ImageCard,
    Dropdown,
    MobileNav,
  },

  methods: {
    setIsActive(event) {
      this.isActive = event.target.innerText;
    },
    randomInRange() {
      return Math.floor(
        Math.random() * (this.maxHeight - this.minHeight + 1) + this.minHeight
      );
    },

    openMobileNav() {
      this.mobileNavIsOpen = !this.mobileNavIsOpen
    },

    myEventHandler(e) {
      if (e.target.innerWidth <= 600) {
        this.min = 150;
        this.max = 250;
      } else {
        this.min = 400;
        this.max = 550;
      }
    },

    async getPictures() {
      const res = await axiosInstance.get(
        `&page=${this.page}&image_type=photo`
      );
      this.totalPages = Math.floor(res.data.totalHits / 20);
      return res.data.hits;
    },

    async loadInitPictures() {
      this.pictures = await this.getPictures();
    },

    async getMorePictures() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.page < this.totalPages) {
            this.page += 1;
            this.getPictures().then((data) => {
              this.pictures.push(...data)
            })
          }
        }
      };
    },
  },

  computed: {
    images() {
      return Array.from({ length: 7 }, (_, i) => i);
    },

    minHeight() {
      return this.min;
    },

    maxHeight() {
      return this.max;
    },
  },

  beforeMount() {
    this.loadInitPictures();
  },

  mounted() {
    this.getMorePictures();
  },
  
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masonry {
  columns: 3 150px;
  column-gap: 1rem;
}

.masonry div {
  width: 150px;
  margin: 1rem;
}

@media screen and (max-width: 379px) {
  .masonry {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }
}

@media screen and (min-width: 580px) {
  .masonry {
    columns: 3 250px;
    column-gap: 1rem;
  }

  .masonry div {
    width: 100%;
    margin: 0 1rem 1rem 0;
  }
}
</style>
