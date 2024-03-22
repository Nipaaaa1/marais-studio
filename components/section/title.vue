<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div>
    <span>{{ name }}</span>
    <h2 class="font-bebas-neue text-xl">
      <slot />
    </h2>
  </div>
</template>
