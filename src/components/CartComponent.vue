<script setup lang="ts">
import product_1 from '@/assets/image-product-1.jpg';
import deleteIcon from '@/assets/icon-delete.svg';

defineProps<{
  toggle: boolean,
  price: number,
  quantity: number
}>()


</script>

<template>
  <Transition name="pop" mode="in-out">
    <div v-if="toggle" class="fixed bg-white md:w-80 w-[350px] z-50 rounded-lg min-h-52 top-[75px] md:top-20 right-4 md:-right-0 md:left-[950px] shadow-xl">
      <div class="border-b py-4 pl-6">
        <span class="text-sm font-semibold">Cart</span>
      </div>
      <div v-show="quantity === 0" class="flex h-40 items-center justify-center">
        <p class="text-sm font-semibold text-slate-700">Your cart is empty</p>
      </div>
      <div v-show="quantity >= 1">
        <div class="pt-5 flex items-center gap-5 justify-center">
          <!-- Cart items will be rendered here -->
          <div class="flex gap-5 items-center">
            <img class="rounded-md w-14" :src="product_1">
            <div class="flex flex-col gap-1 font-medium text-sm text-slate-500">
              <p>Fall Limited Edition Sneakers</p>
              <p>${{ price.toFixed(2) }} x {{ quantity }} <span class="font-bold text-black">${{ (price * quantity).toFixed(2) }}</span></p>
            </div>
          </div>
          <img :src="deleteIcon">
        </div>
        <div class="flex justify-end gap-4 py-4 pb-8 px-6">
          <button class="text-sm font-medium w-full h-14 text-white bg-custom-orange shadow-2xl shadow-pale-orange rounded-md px-4 py-2 active:scale-90">Checkout</button>
        </div>
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
