<template>
  <header class="bg-green-300 h-[7vh] flex justify-around items-center">
    <NuxtLink to="/">
      <h1 class="font-bold text-[24px]">HOME</h1>
    </NuxtLink>
    <NuxtLink to="/cart">
      <q-icon name="shopping_cart" size="40px" />
    </NuxtLink>
  </header>
  <main class="h-[86vh] overflow-y-scroll p-4">
    <slot />
  </main>
  <footer class="bg-red-300 h-[7vh]">Footer</footer>
</template>
<script setup></script>
