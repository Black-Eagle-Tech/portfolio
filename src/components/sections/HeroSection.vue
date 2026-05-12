<template>
  <section class="min-h-screen flex items-center relative overflow-hidden pt-20">
    <div data-parallax="1.5" class="blur-orb w-[500px] h-[500px] bg-accent/30 top-0 left-0"></div>

    <div data-parallax="2" class="blur-orb w-[400px] h-[400px] bg-white/10 bottom-0 right-0"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent"></div>

    <div class="section-container grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <!-- Left -->
      <div class="reveal">
        <p class="uppercase tracking-[0.35em] text-accent text-sm mb-6">
          Luxury Photography
        </p>

        <h1 class="text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
          Capturing timeless moments.
        </h1>

        <p class="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
          Editorial-style photography crafted to preserve emotions,
          stories and unforgettable experiences.
        </p>

        <div class="flex flex-wrap gap-4">
          <button
            class="bg-accent text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300">
            View Portfolio
          </button>

          <button class="border border-white/15 px-8 py-4 rounded-full hover:bg-white/5 transition">
            Book Session
          </button>
        </div>

        <div class="grid grid-cols-3 gap-6 mt-16">
          <div>
            <h3 class="text-3xl font-bold">120+</h3>
            <p class="text-zinc-500 text-sm">Projects</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold">10</h3>
            <p class="text-zinc-500 text-sm">Years</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold">85+</h3>
            <p class="text-zinc-500 text-sm">Clients</p>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div data-parallax="1" class="relative reveal reveal-delay-1">
        <div class="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>

        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
          alt="Photographer" class="relative rounded-[2rem] object-cover h-[700px] w-full shadow-2xl floating hover:scale-[1.02] transition duration-[2000ms]" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'

useReveal()

import { useParallax } from '@/composables/useParallax'

useParallax()
</script>