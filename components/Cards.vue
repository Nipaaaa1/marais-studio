<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="relative overflow-clip rounded-lg">
    <slot />
    <div
      class="absolute bottom-0 z-10 flex h-24 w-full items-end bg-gradient-to-t from-black to-transparent p-5"
    >
      <h2 class="font-bebas-neue text-xl text-white md:text-desktop-xl">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
