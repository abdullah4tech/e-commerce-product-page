<script setup lang="ts">
import logo from '@/assets/logo.svg';
import cartIcon from '@/assets/icon-cart.svg';
import imageAvatar from '@/assets/image-avatar.png';
import product_1 from '@/assets/image-product-1.jpg';
import product_2 from '@/assets/image-product-2.jpg';
import product_3 from '@/assets/image-product-3.jpg';
import product_4 from '@/assets/image-product-4.jpg';
import product_1_thub from '@/assets/image-product-1-thumbnail.jpg';
import product_2_thub from '@/assets/image-product-2-thumbnail.jpg';
import product_3_thub from '@/assets/image-product-3-thumbnail.jpg';
import product_4_thub from '@/assets/image-product-4-thumbnail.jpg';
import iconMinus from '@/assets/icon-minus.svg';
import iconPlus from '@/assets/icon-plus.svg';
import { ref } from 'vue';


const thubmnails = ref([product_1_thub, product_2_thub, product_3_thub, product_4_thub])

const selectedIndex = ref(null)

// Toggle function to select the clicked image
const toggle_display_IMG = (index) => {
  selectedIndex.value = selectedIndex.value === index ? null : index
}
</script>

<template>

  <!-- Header -->
  <header class="px-28">
    <nav class="flex items-center gap-10 justify-between border-b border-gray-300 pb-8 py-6">
      <div class="flex items-center gap-14">
        <img :src="logo" alt="header logo">
        <ul class="flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="flex items-center gap-10">
        <img :src="cartIcon" alt="cart icon">
        <img class="h-11 w-11" :src="imageAvatar" alt="avatar">
      </div>
    </nav>
  </header>


  <!-- Main content -->
  <main class="flex gap-24 h-[550px] justify-center py-[40px]">
    <div class="w-96 flex flex-col gap-5">
      <div>
        <img class="w-full rounded-2xl" :src="product_1">
      </div>
      <div class="flex justify-between">
        <div
          v-for="(i, index) in thubmnails"
          :key="index"
          @click="toggle_display_IMG(index)"
          :class="{
            'border-2 hover:border-opacity-70 w-20 h-20 rounded-lg overflow-hidden border-custom-orange': selectedIndex === index,
            'hover:border-opacity-70 w-20 h-20 rounded-lg overflow-hidden': selectedIndex !== index
          }"
        >
          <img
            :class="{'opacity-40': selectedIndex === index}"
            class="w-full h-full rounded-lg object-cover hover:opacity-70 cursor-pointer"
            :src="i"
            style="object-fit: cover; border-radius: inherit;"
          />
        </div>
      </div>
    </div>
    <div class="w-96 py-12">
      <div>
        <p class="text-xs tracking-[0.1rem] text-slate-700 font-semibold pb-2">SNEAKER COMPANY</p>
        <h2 class="text-3xl font-bold text-slate-900 pb-8">Fall Limited Edition Sneakers</h2>
        <p class="text-slate-600 font-normal text-sm">
          The low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
      </div>
      <div class="mt-5 flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <div class="flex gap-5">
            <h4 class="text-xl font-bold text-slate-900">$125.00</h4>
            <span class="px-2 mt-1 rounded-[5px] h-5 font-semibold flex items-center justify-center text-white text-xs text-center bg-slate-900">50%</span>
          </div>
          <span class="text-sm font-semibold text-slate-700 line-through line">$250.00</span>
        </div>
        <div class="flex items-center gap-3 justify-between">
          <div class="bg-greyis-blue w-48 flex items-center rounded-md justify-between p-2 px-3 py-3">
            <img class="hover:opacity-70 cursor-pointer" :src="iconMinus">
            <span class="text-xs font-bold">0</span>
            <img class="hover:opacity-70 cursor-pointer" :src="iconPlus">
          </div>
          <div class="flex w-full items-center gap-2 rounded-md cursor-pointer justify-center hover:opacity-70 select-none bg-custom-orange p-2 py-3">
            <img class="text-black size-4" :src="cartIcon" alt="cart icon">
            <!-- <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg> -->
            <span class="text-xs font-bold">Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
dd {
  border-width: 20px;
}
</style>

