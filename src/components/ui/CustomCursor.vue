<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const x = ref(0)
const y = ref(0)

const isHovering = ref(false)

const moveCursor = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}

const handleMouseOver = (e) => {
  const target = e.target

  if (
    target.closest('button') ||
    target.closest('a') ||
    target.closest('.cursor-hover')
  ) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  window.addEventListener('mouseover', handleMouseOver)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
  window.removeEventListener('mouseover', handleMouseOver)
})
</script>

<template>
  <div
    class="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
  >
    <div
      :class="[
        'custom-cursor',
        isHovering && 'cursor-active'
      ]"
      :style="{
        transform: `translate(${x}px, ${y}px)`
      }"
    ></div>
  </div>
</template>