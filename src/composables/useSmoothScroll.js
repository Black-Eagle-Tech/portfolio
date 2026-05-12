import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

export function useSmoothScroll() {
  let lenis

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    })

    const raf = (time) => {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    lenis?.destroy()
  })
}