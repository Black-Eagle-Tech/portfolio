import { onMounted, onUnmounted } from 'vue'

export function useParallax() {
  const handleMouseMove = (e) => {
    const layers =
      document.querySelectorAll('[data-parallax]')

    const x =
      (window.innerWidth / 2 - e.clientX) / 40

    const y =
      (window.innerHeight / 2 - e.clientY) / 40

    layers.forEach((layer) => {
      const speed =
        layer.getAttribute('data-parallax')

      layer.style.transform =
        `translate(${x * speed}px, ${y * speed}px)`
    })
  }

  onMounted(() => {
    window.addEventListener(
      'mousemove',
      handleMouseMove
    )
  })

  onUnmounted(() => {
    window.removeEventListener(
      'mousemove',
      handleMouseMove
    )
  })
}