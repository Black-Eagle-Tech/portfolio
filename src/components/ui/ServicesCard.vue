<script setup>
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div
    class="glass-card rounded-[2rem] p-8 hover-lift reveal"
  >
    <div
      class="w-14 h-14 rounded-2xl bg-accent/20 mb-6"
    ></div>

    <h3 class="text-2xl font-semibold mb-4">
      {{ title }}
    </h3>

    <p class="text-zinc-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>