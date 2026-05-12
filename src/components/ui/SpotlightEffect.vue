<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const x = ref(0)
const y = ref(0)

const handleMove = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMove)
})
</script>

<template>
  <div
    class="spotlight pointer-events-none"
    :style="{
      background: `
        radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(212,163,115,0.12),
          transparent 40%
        )
      `
    }"
  ></div>
</template>