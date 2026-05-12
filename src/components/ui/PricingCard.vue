<script setup>
defineProps({
  title: String,
  price: String,
  description: String,
  features: Array,
  highlighted: Boolean,
})
</script>

<template>
  <div
    :class="[
      'relative rounded-[2rem] p-8 transition duration-500 hover-lift reveal overflow-hidden',
      highlighted
        ? 'bg-accent text-black scale-105'
        : 'glass-card'
    ]"
  >
    <!-- Glow -->
    <div
      v-if="highlighted"
      class="absolute inset-0 bg-white/10"
    ></div>

    <!-- Badge -->
    <div
      v-if="highlighted"
      class="absolute top-5 right-5 bg-black text-white text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full"
    >
      Popular
    </div>

    <div class="relative z-10">
      <h3 class="text-2xl font-semibold mb-3">
        {{ title }}
      </h3>

      <p
        :class="[
          'mb-8',
          highlighted
            ? 'text-black/70'
            : 'text-zinc-400'
        ]"
      >
        {{ description }}
      </p>

      <div class="mb-10">
        <span class="text-5xl font-bold">
          {{ price }}
        </span>

        <span
          :class="[
            'ml-2',
            highlighted
              ? 'text-black/70'
              : 'text-zinc-500'
          ]"
        >
          / session
        </span>
      </div>

      <div class="space-y-4 mb-10">
        <div
          v-for="feature in features"
          :key="feature"
          class="flex items-center gap-3"
        >
          <div
            class="w-2 h-2 rounded-full bg-current"
          ></div>

          <p>
            {{ feature }}
          </p>
        </div>
      </div>

      <button
        :class="[
          'w-full py-4 rounded-full font-medium transition duration-300',
          highlighted
            ? 'bg-black text-white hover:opacity-90'
            : 'bg-accent text-black hover:scale-105'
        ]"
      >
        Book Now
      </button>
    </div>
  </div>
</template>