<template>
  <transition name="fade">
    <div
      class="py-5 bg-white image-dropdown relative"
    >
      <div class="bg-transparent">
        <slot name="content"></slot>
      </div>
      <div class="bg-transparent absolute bottom-3">
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
.image-dropdown {
  position: absolute;
  top: -200px;
  left: 15px;
  max-width: 450px;
  min-height: 200px;
  z-index: 2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 10px 0px;
  border-radius: 1px;
  background-color: #fff;
}
.image-dropdown:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-top: 8px solid #fff;
  border-bottom: 8px solid transparent;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  left: 2%;
  top: 200px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
  transition-delay: 1s;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
