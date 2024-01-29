<template>
  <header class="bg-green-300 h-[7vh] flex justify-around items-center">
    <NuxtLink to="/" class="flex items-center gap-1">
      <q-icon name="home" size="40px" />
      <h1 class="font-bold text-[24px]">HOME</h1>
    </NuxtLink>
    <NuxtLink to="/dashboard" class="flex items-center gap-1">
      <q-icon name="dashboard" size="40px" />
      <h1 class="font-bold text-[24px]">DASHBOARD</h1>
    </NuxtLink>
    <NuxtLink to="/contador" class="flex items-center gap-1">
      <h1 class="font-bold text-[24px]">CONTADOR</h1>
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
