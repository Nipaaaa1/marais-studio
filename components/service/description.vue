<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-lg">{{ title }}</h3>
    <p class="text-black/80">
      {{ description }}
    </p>
  </div>
</template>
