import { ref } from 'vue'

const isOpen = ref(false)
const activeItem = ref(null)

export function usePortfolioModal() {
  const openModal = (item) => {
    activeItem.value = item
    isOpen.value = true

    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    isOpen.value = false
    activeItem.value = null

    document.body.style.overflow = ''
  }

  return {
    isOpen,
    activeItem,
    openModal,
    closeModal,
  }
}