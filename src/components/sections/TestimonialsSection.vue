<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'

const testimonials = [
  {
    name: 'Sophia Bennett',
    role: 'Bride',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    text:
      'Absolutely stunning work. Every photo feels emotional, elegant and timeless.',
  },
  {
    name: 'James Carter',
    role: 'Creative Director',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    text:
      'An incredible experience from beginning to end. Premium quality in every detail.',
  },
  {
    name: 'Emily Watson',
    role: 'Fashion Model',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop',
    text:
      'The editorial aesthetic and cinematic direction exceeded all expectations.',
  },
]
</script>

<template>
  <section class="section-spacing">
    <div class="section-container">
      <SectionTitle
        label="Testimonials"
        title="Trusted by clients worldwide."
        description="A premium photography experience designed around emotion and storytelling."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          v-bind="testimonial"
        />
      </div>
    </div>
  </section>
</template>