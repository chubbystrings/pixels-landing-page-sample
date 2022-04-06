<template>
  <div
    class="w-full bg-black inline-block relative tint rounded-lg"
    @mouseover="showDetails = true"
    @mouseleave="showDetails = false"
    :style="{ height: height }"
  >
    <img
      :src="imageDetails.largeImageURL"
      alt="searched image"
      class="h-full w-full z-10 rounded-lg"
    />
    <transition name="fade" appear>
      <div
        class="absolute flex justify-between bottom-1 h-11 w-full items-center text-white see-border box-border p-3"
        v-if="showDetails"
      >
        <div class="flex gap-2 items-center">
          <div
            @mouseover="showUserDetails = true"
            @mouseleave="showUserDetails = false"
          >
            <img
              :src="
                imageDetails.userImageURL
                  ? imageDetails.userImageURL
                  : '/images/avatar.svg'
              "
              alt="user avatar"
              class="h-8 w-8 rounded-full"
            />
            <dropdown v-if="showUserDetails">
              <template v-slot:content>
                <div class="flex flex-col gap-3">
                  <div class="flex justify-between gap-7 px-2 items-center">
                    <div class="flex gap-3 items-center">
                      <div class="rounded-full h-10 w-10">
                        <img
                          :src="
                            imageDetails.userImageURL
                              ? imageDetails.userImageURL
                              : '/images/avatar.svg'
                          "
                          class="w-full h-full rounded-full"
                        />
                      </div>
                      <div class="flex flex-col">
                        <p class="text-black">{{ imageDetails.user }}</p>
                        <small class="text-light">58 followers</small>
                      </div>
                    </div>
                    <div>
                      <button class="bg-button px-5 py-1 text-white rounded-sm">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div class="flex gap-2 px-2 justify-between">
                    <div class="h-20 w-20">
                      <img
                        :src="imageDetails.previewURL"
                        class="w-full h-full"
                      />
                    </div>
                    <div class="h-20 w-20">
                      <img
                        :src="imageDetails.previewURL"
                        class="w-full h-full"
                      />
                    </div>
                    <div class="h-20 w-20">
                      <img
                        :src="imageDetails.previewURL"
                        class="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:footer>
                <div class="flex gap-2 px-2 items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img src="/images/eye.svg" class="h-5 w-5" alt="icon" />
                    <small class="text-black">1.38M</small>
                  </div>
                  <div class="flex items-center gap-2">
                    <img
                      src="/images/download-icon-filled.svg"
                      class="h-5 w-5"
                      alt="icon"
                    />
                    <small class="text-black">{{
                      imageDetails.downloads
                    }}</small>
                  </div>
                  <div class="flex items-center gap-2">
                    <img
                      src="/images/heart-filled.svg"
                      class="h-5 w-5"
                      alt="icon"
                    />
                    <small class="text-black">{{ imageDetails.likes }}</small>
                  </div>
                </div>
              </template>
            </dropdown>
          </div>
          <small class="text-sm">{{ imageDetails.user }}</small>
        </div>
        <div class="flex gap-2 items-center">
          <img
            src="/images/download-icon.svg"
            class="h-5 w-5 text-white"
            alt="icon"
          />
          <img
            src="/images/add-new-icon.svg"
            class="h-5 w-5 text-white"
            alt="icon"
          />
          <img
            src="/images/heart-icon.svg"
            class="h-5 w-5 text-white"
            alt="icon"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Dropdown from "./ImageDropdown.vue";
export default {
  props: ["imageDetails", "height"],
  components: {
    Dropdown,
  },
  data: () => ({
    showDetails: false,
    showUserDetails: false,
  }),
};
</script>

<style scoped>
.tint {
  position: relative;
  cursor: pointer;
  border-radius: 0.5rem;
}

.tint:hover:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: background 0.3s linear;
  border-radius: 0.5rem;
}

.tint:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s linear;
  border-radius: 0.5rem;
}

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
