<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Menu } from 'lucide-vue-next'

import MobileMenu from './MobileMenu.vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (value) => {
  document.body.classList.toggle(
    'menu-open',
    value
  )
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-[9999] transition-all duration-300',
      isScrolled
        ? 'bg-black/60 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent'
    ]"
  >
    <nav
      class="section-container h-20 flex items-center justify-between"
    >
      <div>
        <h1 class="text-2xl font-semibold tracking-wide">
          Luna Studio
        </h1>
      </div>

      <!-- Desktop -->
      <div
        class="hidden md:flex items-center gap-8 text-sm text-zinc-300"
      >
        <a href="#about" class="hover:text-white transition">
          About
        </a>

        <a href="#services" class="hover:text-white transition">
          Services
        </a>

        <a href="#portfolio" class="hover:text-white transition">
          Portfolio
        </a>

        <a href="#contact" class="hover:text-white transition">
          Contact
        </a>
      </div>

      <button
        class="hidden md:flex bg-accent text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
      >
        Book Now
      </button>

      <!-- Mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden"
      >
        <Menu />
      </button>
    </nav>

    <MobileMenu
      :is-open="isMenuOpen"
      @close="isMenuOpen = false"
    />
  </header>
</template>