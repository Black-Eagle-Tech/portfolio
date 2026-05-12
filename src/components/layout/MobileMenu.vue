<script setup>
defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])

const links = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Portfolio',
    href: '#portfolio',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]
</script>

<template>
  <Transition name="mobile-menu">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-2xl flex flex-col justify-center items-center"
    >
      <button
        @click="emit('close')"
        class="absolute top-8 right-8 text-sm uppercase tracking-[0.3em]"
      >
        Close
      </button>

      <nav class="flex flex-col gap-8 text-center">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          @click="emit('close')"
          class="text-4xl md:text-5xl font-semibold hover:text-accent transition"
        >
          {{ link.name }}
        </a>
      </nav>

      <div class="absolute bottom-10 text-zinc-500 text-sm">
        Luna Studio © 2026
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>