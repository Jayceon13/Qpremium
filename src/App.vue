<template>
  <transition name="router-animation">
    <router-view :key="$route.meta.key" class="router-animation" />
  </transition>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
.router-animation-enter-active,
.router-animation-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease;
}

.router-animation-enter-from {
  transform: translateX(-100%);
}

.router-animation-enter-to {
  transform: translateX(0);
}

.router-animation-leave-from {
  transform: translateX(0);
}

.router-animation-leave-to {
  transform: translateX(100%);
}
</style>
