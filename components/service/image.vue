<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <img :src="src" :alt="alt" class="h-max w-full" />
</template>
