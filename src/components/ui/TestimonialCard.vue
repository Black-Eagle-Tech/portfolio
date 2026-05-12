<script setup>
defineProps({
  image: String,
  name: String,
  role: String,
  text: String,
})
</script>

<template>
  <div
    class="glass-card rounded-[2rem] p-8 hover-lift reveal"
  >
    <div class="flex items-center gap-4 mb-6">
      <img
        :src="image"
        :alt="name"
        class="w-16 h-16 rounded-full object-cover"
      />

      <div>
        <h3 class="text-lg font-semibold">
          {{ name }}
        </h3>

        <p class="text-zinc-500 text-sm">
          {{ role }}
        </p>
      </div>
    </div>

    <div class="flex gap-1 mb-5">
      <span
        v-for="n in 5"
        :key="n"
        class="text-accent"
      >
        ★
      </span>
    </div>

    <p class="text-zinc-400 leading-relaxed">
      {{ text }}
    </p>
  </div>
</template>