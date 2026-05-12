<script setup>
import { usePortfolioModal } from '@/composables/usePortfolioModal'

const { isOpen, activeItem, closeModal } =
  usePortfolioModal()
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
      @click="closeModal"
    >
      <div
        class="relative max-w-6xl w-full"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute -top-14 right-0 text-white text-sm uppercase tracking-[0.3em]"
        >
          Close
        </button>

        <img
          :src="activeItem?.image"
          :alt="activeItem?.title"
          class="w-full max-h-[85vh] object-cover rounded-[2rem]"
        />

        <div class="mt-6">
          <p
            class="uppercase tracking-[0.3em] text-accent text-xs mb-3"
          >
            {{ activeItem?.category }}
          </p>

          <h2 class="text-4xl font-bold">
            {{ activeItem?.title }}
          </h2>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>