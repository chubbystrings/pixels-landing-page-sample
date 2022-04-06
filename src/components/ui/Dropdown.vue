<template>
  <transition name="fade" appear>
    <div
      class="py-5 bg-white dropdown"
      :style="{ minWidth: `${minWidth}px` }"
    >
      <div class="bg-transparent">
        <slot name="content"></slot>
      </div>
      <div class="bg-transparent grid place-items-center">
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["minWidth"],
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  top: 35px;
  right: 0px;
  max-width: 450px;
  z-index: 2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 10px 0px;
  border-radius: 1px;
  background-color: #fff;
}
.dropdown:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-top: 8px solid transparent;
  border-bottom: 8px solid #fff;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  right: 2%;
  top: -15px;
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
