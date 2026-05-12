<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ServiceCard from '@/components/ui/ServicesCard.vue'

import { useReveal } from '@/composables/useReveal'

useReveal()

const services = [
  {
    title: 'Wedding Photography',
    description:
      'Elegant storytelling for unforgettable wedding moments.',
  },
  {
    title: 'Portrait Sessions',
    description:
      'Creative and cinematic portraits with premium direction.',
  },
  {
    title: 'Fashion Photography',
    description:
      'Editorial-inspired photography for brands and models.',
  },
]
</script>

<template>
  <section
    id="services"
    class="section-spacing"
  >
    <div class="section-container">
      <SectionTitle
        label="Services"
        title="Tailored photography experiences."
        description="Crafted sessions focused on emotion, aesthetics and storytelling."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>