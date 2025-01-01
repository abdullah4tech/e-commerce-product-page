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
</script>

<template>

  <!-- Header -->
  <header class="px-28">
    <nav class="flex items-center gap-10 justify-between border-b border-gray-300 pb-8 py-6">
      <div class="flex items-center gap-14">
        <img :src="logo" alt="header logo">
        <ul class="flex items-center gap-8 text-sm text-gray-600">
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
  <main>
    <div class="w-96">
      <div>
        <img class="w-full" :src="product_1">
      </div>
      <div class="flex">
        <img class="w-20 h-20" :src="product_1_thub">
        <img class="w-20 h-20" :src="product_2_thub">
        <img class="w-20 h-20" :src="product_3_thub">
        <img class="w-20 h-20" :src="product_4_thub">
      </div>
    </div>
    <div class="w-96">
      <div>
        <p>SNEAKER COMPANY</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          The low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
      </div>
      <div>
        <div>
          <div>
            <h4>%125.00</h4>
            <span>50%</span>
          </div>
          <span>$250.00</span>
        </div>
        <div>
          <div>
            <img :src="iconMinus">
            <span>0</span>
            <img :src="iconPlus">
          </div>
          <button class="flex gap-4">
            <img :src="cartIcon">
            <span>Add to cart</span>
          </button>
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

