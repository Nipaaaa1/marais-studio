<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div>
    <span class="md:max-w-[48.75rem]">{{ name }}</span>
    <h2 class="font-bebas-neue text-xl md:text-desktop-xl">
      <slot />
    </h2>
  </div>
</template>
