<script setup lang="ts">
import logo from '@/assets/logo.svg';
import cartIcon from '@/assets/icon-cart.svg';
import imageAvatar from '@/assets/image-avatar.png';
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
    
  </main>
</template>

<style scoped>
dd {
  border-width: 20px;
}
</style>

