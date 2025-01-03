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
import CartComponent from '@/components/CartComponent.vue';
import iconMenuOpen from '@/assets/icon-menu.svg';
import iconMenuClose from '@/assets/icon-close.svg'
import iconPrevious from '@/assets/icon-previous.svg';
import iconNext from '@/assets/icon-next.svg';

const thubmnails = ref<object>([product_1_thub, product_2_thub, product_3_thub, product_4_thub])

const selectedIndex = ref(null)
const toggleCart = ref<boolean>(false)

// Toggle function to select the clicked image
const toggle_display_IMG = (index) => {
  selectedIndex.value = selectedIndex.value === index ? null : index
}
</script>

<template>
  <CartComponent :toggle="toggleCart" />

  <!-- Sidebar -->
  <div class="md:hidden hidden w-full h-full fixed bg-gray-800 bg-opacity-50 z-50">
    <div class="h-screen w-64 bg-white">
      <img class="p-4 pt-10 pl-8" :src="iconMenuClose" >
      <ul class="flex flex-col gap-5 font-semibold p-5 pl-8">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </div>
  </div>

  <!-- Header -->
  <header class="fixed md:static top-0 left-0 right-0 z-50 px-4 md:px-40 bg-white h-16 md:h-20">
    <nav class="flex items-center justify-between md:border-b md:border-gray-300 py-4 md:py-6">
      <!-- Logo -->
      <div class="flex gap-14">
        <div class="flex items-center gap-4">
          <img class="w-5 md:hidden" :src="iconMenuOpen">
          <img :src="logo" alt="header logo">
        </div>

        <!-- Navigation links (hidden on mobile) -->
        <ul class="hidden md:flex md:items-center  md:gap-8 cursor-pointer md:text-sm md:font-medium md:text-gray-600">
          <li class="hover:text-black">Collections</li>
          <li class="hover:text-black">Men</li>
          <li class="hover:text-black">Women</li>
          <li class="hover:text-black">About</li>
          <li class="hover:text-black">Contact</li>
        </ul>
      </div>


      <!-- Cart and Avatar -->
      <div class="flex items-center gap-4 md:gap-10">
        <p class="absolute top-7 bg-custom-orange flex items-center justify-center text-white p-2 rounded-full w-5 h-2 right-[235px] font-bold jami">2</p>
        <svg width="22" @click="toggleCart = !toggleCart" class="h-6 w-6 text-black cursor-pointer md:h-auto md:w-auto" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" :fill="toggleCart ? '#000000' : '#69707D'" fill-rule="nonzero"/></svg>
        <img class="h-8 w-8 md:h-11 border-2 border-white hover:border-custom-orange md:w-11 rounded-full" :src="imageAvatar" alt="avatar">
      </div>
    </nav>
  </header>



  <!-- Main content -->
  <main class="flex md:flex-row pt-[360px] md:pt-12 flex-col gap-8 md:gap-24 h-[550px] md:mb-0 mb-96 justify-center py-[40px]">
    <div class="w-96 flex flex-col gap-5">
      <div class="md:hidden absolute top-56 flex left-5 items-center gap-[258px]">
        <div class="w-[45px] h-[45px] bg-white border rounded-full flex items-center justify-center">
          <img class="w-3 h-3" :src="iconPrevious" alt="icon">
        </div>

        <div class="w-[45px] h-[45px] bg-white border rounded-full flex items-center justify-center">
          <img class="w-3 h-3" :src="iconNext" alt="icon">
        </div>
      </div>
      <div>
        <img class="w-full md:rounded-2xl" :src="product_1">
      </div>
      <div class="hidden md:flex md:justify-between">
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
            class="w-full h-full object-cover hover:opacity-70 cursor-pointer"
            :src="i"
            style="object-fit: cover; border-radius: inherit;"
          />
        </div>
      </div>
    </div>
    <div class="md:w-96 ml-5 md:py-12">
      <div>
        <p class="text-xs tracking-[0.1rem] text-slate-700 font-semibold pb-2">SNEAKER COMPANY</p>
        <h2 class="md:text-4xl text-3xl font-bold text-slate-900 md:pb-8 pb-4">Fall Limited Edition Sneakers</h2>
        <p class="text-slate-600 font-normal text-sm">
          The low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
      </div>
      <div class="mt-5 flex flex-col gap-5">
        <div class="flex md:flex-col justify-between gap-2">
          <div class="flex gap-5">
            <h4 class="md:text-xl text-2xl font-bold text-slate-900">$125.00</h4>
            <span class="px-2 md:mt-1 mt-2 rounded-[5px] h-5 font-semibold flex items-center justify-center text-white md:text-xs text-sm text-center bg-slate-900">50%</span>
          </div>
          <span class="md:text-sm text-base font-semibold text-slate-700 line-through line">$250.00</span>
        </div>
        <div class="flex md:flex-row flex-col items-center gap-3 justify-between">
          <div class="bg-greyis-blue md:w-48 w-full flex items-center rounded-md justify-between p-5 md:p-2 md:px-3 md:py-3">
            <img class="hover:opacity-70 cursor-pointer" :src="iconMinus">
            <span class="md:text-xs text-base font-bold">0</span>
            <img class="hover:opacity-70 cursor-pointer" :src="iconPlus">
          </div>
          <div class="flex w-full items-center gap-2 rounded-md cursor-pointer justify-center hover:opacity-70 select-none bg-custom-orange shadow-2xl shadow-pale-orange p-5 md:p-2 md:py-3">
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

.jami {
  font-size: 10px;
}
</style>

