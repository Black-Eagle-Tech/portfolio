<script setup>
defineProps({
  label: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="max-w-3xl mb-16">
    <p
      class="uppercase tracking-[0.35em] text-accent text-sm mb-4"
    >
      {{ label }}
    </p>

    <h2
      class="text-4xl md:text-5xl font-bold leading-tight mb-6"
    >
      {{ title }}
    </h2>

    <p class="text-zinc-400 text-lg leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>