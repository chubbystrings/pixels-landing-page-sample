<template>
  <transition name="fade" appear>
    <div
      class="mobile-overlay-wrapper"
    >
      <div class="flex border-b-2 border-indigo-50 py-5 mt-20">
        <p>Home</p>
      </div>
      <div class="border-b-2 border-indigo-50 py-3">
        <ul class="text-white text-sm ">
          <li class="dropdown-list">Discover Photos</li>
          <li class="dropdown-list">Popular Searches</li>
          <li class="dropdown-list">Leaderboard</li>
          <li class="dropdown-list">Challenges</li>
          <li class="dropdown-list">Free Videos</li>
          <li class="dropdown-list">Pexels Blog</li>
        </ul>
      </div>
      <div class="border-b-2 border-indigo-50 py-3">
        <ul class="text-white text-sm">
          <li class="dropdown-list">Login</li>
          <li class="dropdown-list">Join</li>
          <li class="dropdown-list">Change License</li>
        </ul>
      </div>

      <div class="border-b-2 border-indigo-50 py-3">
        <ul class="text-white text-sm">
          <li class="dropdown-list">Apps And Ps Plugin</li>
          <li class="dropdown-list">FAQ</li>
          <li class="dropdown-list">About Us</li>
          <li class="dropdown-list">Imprints and Terms</li>
        </ul>
      </div>
      <div class="flex gap-10 justify-between p-2 text-search">
        <div class="hover:bg-gray-200 cursor-pointer">
          <img class="h-5 w-5" src="/images/facebook.svg" />
        </div>
        <div class="hover:bg-gray-200 cursor-pointer">
          <img class="h-5 w-5" src="/images/twitter.svg" />
        </div>
        <div class="hover:bg-gray-200 cursor-pointer">
          <img class="h-5 w-5" src="/images/instagram.svg" />
        </div>
        <div class="hover:bg-gray-200 cursor-pointer">
          <img class="h-5 w-5" src="/images/pintrest.svg" />
        </div>
        <div class="hover:bg-gray-200 cursor-pointer">
          <img class="h-5 w-5" src="/images/youtube.svg" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
