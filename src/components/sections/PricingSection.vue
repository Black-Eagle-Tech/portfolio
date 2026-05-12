<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import PricingCard from '@/components/ui/PricingCard.vue'

import { useReveal } from '@/composables/useReveal'

useReveal()

const pricingPlans = [
  {
    title: 'Essential',
    price: '$290',
    description:
      'Perfect for personal portraits and small sessions.',
    features: [
      '1 Hour Session',
      '20 Edited Photos',
      'Online Gallery',
      'Basic Retouching',
    ],
  },
  {
    title: 'Premium',
    price: '$590',
    description:
      'Ideal for weddings, branding and editorial projects.',
    highlighted: true,
    features: [
      '4 Hour Session',
      '80 Edited Photos',
      'Premium Retouching',
      'Creative Direction',
      'Private Gallery',
    ],
  },
  {
    title: 'Luxury',
    price: '$990',
    description:
      'Full cinematic photography experience with premium production.',
    features: [
      'Full Day Coverage',
      'Unlimited Photos',
      'Luxury Album',
      'Creative Team',
      'Priority Delivery',
    ],
  },
]
</script>

<template>
  <section class="section-spacing">
    <div class="section-container">
      <SectionTitle
        label="Pricing"
        title="Photography packages tailored to your story."
        description="Luxury experiences designed for timeless visual storytelling."
      />

      <div class="grid lg:grid-cols-3 gap-8 items-center">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.title"
          v-bind="plan"
        />
      </div>
    </div>
  </section>
</template>