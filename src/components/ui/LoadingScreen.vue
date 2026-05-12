<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(true)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 2200)
})
</script>

<template>
  <Transition name="loader">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden"
    >
      <!-- Background Glow -->
      <div
        class="absolute w-[500px] h-[500px] rounded-full bg-accent/20 blur-[140px]"
      ></div>

      <!-- Content -->
      <div class="relative z-10 text-center">
        <p
          class="uppercase tracking-[0.5em] text-accent text-sm mb-6 animate-pulse"
        >
          Luna Studio
        </p>

        <h1
          class="text-5xl md:text-7xl font-bold mb-8"
        >
          Capturing Moments
        </h1>

        <!-- Loader Bar -->
        <div
          class="w-[220px] h-[2px] bg-white/10 overflow-hidden mx-auto"
        >
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loader-enter-active,
.loader-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}

.loader-line {
  width: 100%;
  height: 100%;

  background: #d4a373;

  animation: loading 2s ease forwards;

  transform-origin: left;
}

@keyframes loading {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
</style>