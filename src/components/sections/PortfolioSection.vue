<script setup>
import { computed, ref } from 'vue'

import SectionTitle from '@/components/ui/SectionTitle.vue'
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import PortfolioModal from '@/components/ui/PortfolioModal.vue'

const activeCategory = ref('All')

const categories = [
  'All',
  'Wedding',
  'Fashion',
  'Portrait',
  'Lifestyle',
]

const portfolioItems = [
  {
    title: 'Golden Hour',
    category: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Elegance',
    category: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Wild Beauty',
    category: 'Portrait',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Minimal Story',
    category: 'Lifestyle',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Dream Wedding',
    category: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Urban Mood',
    category: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
  },
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') {
    return portfolioItems
  }

  return portfolioItems.filter(
    (item) => item.category === activeCategory.value
  )
})
</script>

<template>
  <section
    id="portfolio"
    class="section-spacing"
  >
    <div class="section-container">
      <SectionTitle
        label="Portfolio"
        title="Moments transformed into timeless visual stories."
        description="A curated collection of cinematic photography projects."
      />

      <!-- Filters -->
      <div
        class="flex flex-wrap gap-4 mb-14"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-3 rounded-full transition duration-300 border',
            activeCategory === category
              ? 'bg-accent text-black border-accent'
              : 'border-white/10 text-zinc-400 hover:border-white/30'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Grid -->
      <TransitionGroup
        name="portfolio"
        tag="div"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="item in filteredItems"
          :key="item.title"
          class="h-[450px]"
        >
          <PortfolioCard
            v-bind="item"
          />
        </div>
      </TransitionGroup>
    </div>

    <PortfolioModal />
  </section>
</template>

<style scoped>
.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.5s ease;
}

.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>