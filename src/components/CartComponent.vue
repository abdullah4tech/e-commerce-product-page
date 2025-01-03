<script setup lang="ts">
defineProps<{
  toggle: boolean
}>()
</script>

<template>
  <Transition name="pop" mode="in-out">
    <div v-if="toggle" class="fixed bg-white md:w-80 w-[350px] z-50 rounded-lg min-h-52 top-[75px] md:top-20 right-4 md:-right-0 md:left-[950px] shadow-xl">
      <div class="border-b py-4 pl-6">
        <span class="text-sm font-semibold">Cart</span>
      </div>
      <div class="flex h-40 items-center justify-center">
        <p class="text-sm font-semibold text-slate-700">Your cart is empty</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Base style for the transition */
.pop-enter-active, .pop-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Start state for entering */
.pop-enter-from {
  transform: scale(0.9);
  opacity: 0;
}

/* End state for entering */
.pop-enter-to {
  transform: scale(1);
  opacity: 1;
}

/* Start state for leaving */
.pop-leave-from {
  transform: scale(1);
  opacity: 1;
}

/* End state for leaving */
.pop-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
</style>
