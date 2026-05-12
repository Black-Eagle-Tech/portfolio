<template>
  <div
    @click="handleClick"
    class="group relative overflow-hidden rounded-[2rem] cursor-pointer reveal hover-lift cursor-hover"
  >
    <img
      :src="image"
      :alt="title"
      class="w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
    />

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"
    ></div>

    <div
      class="absolute bottom-0 left-0 p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500"
    >
      <p
        class="uppercase tracking-[0.3em] text-accent text-xs mb-3"
      >
        {{ category }}
      </p>

      <h3 class="text-2xl font-semibold">
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { usePortfolioModal } from '@/composables/usePortfolioModal'

const props = defineProps({
  image: String,
  title: String,
  category: String,
})

const { openModal } = usePortfolioModal()

const handleClick = () => {
  openModal(props)
}
</script>