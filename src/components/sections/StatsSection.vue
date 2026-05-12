<script setup>
const stats = [
  {
    number: '120+',
    label: 'Projects',
  },
  {
    number: '10',
    label: 'Years Experience',
  },
  {
    number: '85+',
    label: 'Happy Clients',
  },
  {
    number: '15',
    label: 'Awards',
  },
]
</script>

<template>
  <section class="section-spacing">
    <div class="section-container">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="glass-card rounded-[2rem] p-10 text-center reveal hover-lift"
        >
          <h3
            class="text-5xl font-bold mb-4 text-accent"
          >
            {{ stat.number }}
          </h3>

          <p class="text-zinc-400">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>