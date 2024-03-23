<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="space-y-3 md:self-end">
    <h3 class="text-lg md:text-desktop-lg">{{ title }}</h3>
    <p class="max-w-prose text-black/80">
      {{ description }}
    </p>
  </div>
</template>
